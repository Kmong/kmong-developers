echo "#######################################"
echo "####  AWS login to npm registry... ####"
echo "#######################################"

AWS_ID=151676761426

aws codeartifact login --tool npm --repository kmong-frontend-core --domain kmong --domain-owner $AWS_ID

export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain kmong --domain-owner $AWS_ID --query authorizationToken --output text`

yarn install
