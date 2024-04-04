import { Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";


export class AwsCdkS3WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    var websitebucket = new s3.Bucket(this, "website-bucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      accessControl: s3.BucketAccessControl.PRIVATE,
    });
    new BucketDeployment(this, 'BucketDeployment', {
      destinationBucket: websitebucket,
      sources: [Source.asset(path.resolve(__dirname, '../dist'))]
    })
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    websitebucket.grantRead(originAccessIdentity);
    new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
      origin: new S3Origin(websitebucket, {originAccessIdentity}),
      }
    })
  } 
} 


