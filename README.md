# AWS CDK TypeScript Project: S3 Hosted Website with CloudFront Distribution and OAI

This project demonstrates how to use AWS Cloud Development Kit (AWS CDK) with TypeScript to deploy a static website hosted on Amazon S3 with a CloudFront distribution and Origin Access Identity (OAI).

## Overview

The project sets up a private S3 bucket for website hosting, deploys website content from the `dist` directory, and configures a CloudFront distribution to serve the content securely. An Origin Access Identity (OAI) is used to ensure that the S3 content can only be accessed through the CloudFront distribution.

## Prerequisites

- AWS Account and AWS CLI configured with access credentials.
- Node.js and npm installed.
- AWS CDK installed globally (`npm install -g aws-cdk`).

## Setup and Deployment

1. **Clone the repository and navigate to the project directory.**

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Build your project (if necessary):**

   ```
   npm run build
   ```

   Ensure your website content is in the `dist` directory.

4. **Bootstrap your AWS environment (if you haven't already):**

   ```
   cdk bootstrap
   ```

5. **Deploy the stack to your AWS account:**

   ```
   cdk deploy
   ```

   This command deploys the S3 bucket, uploads your website content, and sets up the CloudFront distribution.

## Features

- **Amazon S3 Bucket**: Configured for website hosting, with SSL enforcement, versioning, and set to private access.
- **CloudFront Distribution**: Serves your website content with a default root object of `index.html`.
- **Origin Access Identity (OAI)**: Restricts access to the S3 bucket, so content can only be accessed through CloudFront.

## Cleanup

To avoid incurring future charges, delete the resources created by this stack:

```
cdk destroy
```

## Contributing

Contributions to this project are welcome! Please follow the standard fork and pull request workflow.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
