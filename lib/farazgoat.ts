import { Stack, StackProps, Duration} from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as KMS from 'aws-cdk-lib/aws-kms';



export class FarazGoated extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

   new s3.Bucket(this, "s3-goated", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      accessControl: s3.BucketAccessControl.PRIVATE,

    });

    var myDopeKey = new KMS.Key(this, 'Roxy', {

    })

    new sqs.Queue(this, 'Queue', {
      dataKeyReuse: Duration.hours(10), 
      queueName: 'AleezaS.fifo', 
      fifo: true,
      encryptionMasterKey: myDopeKey,
      enforceSSL: true
    });

  } 
}


