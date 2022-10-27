# image-recognition-app

An image recognition web app, using AWS and Amazon Rekognition.
Demo: https://www.loom.com/share/8bfd3e48323849fa99cf7cf4fe24587c

Requirements:
- AWS Account, with CLI configured: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
- AWS SAM CLI: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
- Serverless Framework: npm install -g serverless

Steps:
1. Download this repo
2. Go into the "presigned-urls_aws-sam" folder
3. Run the following command:
    sam deploy --guided 
    (accepting all defaults except for "UploadRequestFunction may not have authorization defined, Is this okay? [y/N]". For this setting, type "y")
4. Go into the "rekognition-backend_sls" folder
5. Run the following commands:
    npm install
    sls package
    sls deploy
Once that's done, you should see two stacks created on AWS Cloudformation.
6. In "presigned-urls_aws-sam/frontend/index.html", change the API endpoints to the two API's that were created.
6. Create an S3 bucket with ACLs enabled, and unchecking "Block all public access"
7. From "presigned-urls_aws-sam/frontend", upload the "index.html" file into the S3 bucket with "grant-read-access" enabled.
8. Open index.html in the S3 bucket you created, and you're ready to go!
