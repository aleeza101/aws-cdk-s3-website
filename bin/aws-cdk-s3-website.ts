#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkS3WebsiteStack } from '../lib/aws-cdk-s3-website-stack';

const app = new cdk.App();
new AwsCdkS3WebsiteStack(app, 'AwsCdkS3WebsiteStack');
