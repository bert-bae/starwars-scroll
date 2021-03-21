# Starwars Style Scroller

Submit a blob of text and watch as it turns your writing into a Star Wars introduction.

Link to site [here](https://star-crawl.bertcode.com/)

# Running the front-end

Requirements:

- NPM CLI
- `npm install`
- `npm run start`

Deployment:

- [Setting up S3 and Cloudfront with Route53](https://www.youtube.com/watch?v=DiIaoIcoKNY)
- Once S3, Cloudfront, and Route53 (optional for custom domains) are set up, export your S3 bucket name with `export S3_BUCKET=<bucket name>`
- Copy the `config/config.template.json` to `config/config.json`. Change the configurations with your server URL if you want it to be connected to the DynamoDB server that you have deployed. Otherwise, the `share link` or loading shared stories will not work.
- Run `make deploy-s3` from root
- Alternatively, you can upload to s3 directly by running your own `aws s3 cp [local] [s3BucketPath]`
  - Example in `/deploy/upload-to-s3.sh`

# Deploying Lambdas (Server)

Requirements:

- [Install `AWS SAM CLI`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- AWS config/credentials to be set-up with your account key and secret key.
- Create a S3 bucket and update `samconfig.toml` S3 bucket name field
- Change any other necessary fields in `samconfig.toml` (e.g. region might be different depending on where your AWS account primarily exists)

Deployment:

1. Go into `server` folder.
2. Run `make deploy STACK_NAME=<YOUR_STACK_NAME>`
3. Whitelist your stack url to allow access. This will allow you to `curl` or `postman` any of the other API endpoints. You can also whitelist any URLs that will be making the request such as `http://localhost:3001`. This ensures that the API Key does not have to be on client-side code and exposed to the public to ensure security to your server.
4. Optional: If you are deploying locally, the server will automatically assign `http://localhost:3001` with the CORS configurations. However, if you want to deploy to a custom URL, you need to ensure that you assign the variable to the terminal running the deployment script with `export ORIGIN_URL=<YOUR URL>`. Otherwise, the configuration for CORS will not be set correctly between the front-end and server.

```
curl --header "Content-Type: application/json" --header "x-api-key: <YOUR-API-KEY>" \
  --request POST \
  --data '{"domain":"<YOUR-STACK-URL>"}' \
  https://<YOUR-STACK-URL>/whitelist
```
