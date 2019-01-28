STACK_NAME=serverless-layers
#aws cloudformation delete-stack --stack-name $STACK_NAME --region eu-central-1 --profile thinkport
sam package     --template-file template.yaml     --output-template-file packaged.yaml     --s3-bucket thinkport-layers-test --profile thinkport
sam deploy --region eu-central-1  --template-file packaged.yaml --stack-name $STACK_NAME  --profile thinkport --capabilities=CAPABILITY_IAM

