#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkS3WebsiteStack } from '../lib/aws-cdk-s3-website-stack';
import { AwsSolutionsChecks, NagSuppressions} from 'cdk-nag';
import { FarazGoated } from '../lib/farazgoat';

const app = new cdk.App();

var myWebsiteStack = new AwsCdkS3WebsiteStack(app, 'AwsCdkS3WebsiteStack');
// var fawaz = new FarazGoated(app, "teehee");

cdk.Aspects.of(app).add(new AwsSolutionsChecks({verbose: true}))

NagSuppressions.addStackSuppressions(myWebsiteStack, [
    { id: 'AwsSolutions-S1', reason: 'Cost related'},
    { id: 'AwsSolutions-CFR3', reason: 'Cost related'},
    { id: 'AwsSolutions-CFR4', reason: 'Cost related'},
    { id: 'AwsSolutions-IAM4', reason: 'AWS managed policies make it convenient for you to assign appropriate permissions to users, groups, and roles. It is faster than writing the policies yourself, and includes permissions for many common use cases.'},
    { id: 'AwsSolutions-IAM5', reason: 'Wildcard needed in order to get resource deployed'},
    { id: 'AwsSolutions-L1', reason: 'Lamba function used is default lambda created by aws cdk package to deploy bucket deployment lambda'}
]);

