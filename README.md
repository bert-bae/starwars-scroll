# Starwars Style Scroller

Submit a blob of text and watch as it turns your writing into a Star Wars introduction.

# Running the front-end

Requirements:

- NPM CLI
- `npm install`
- `npm run start`

# Deploying Lambdas (Server)

Requirements:

- [Install `AWS SAM CLI`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- AWS config/credentials to be set-up with your account key and secret key.
- Create a S3 bucket and update `samconfig.toml` S3 bucket name field
- Change any other necessary fields in `samconfig.toml` (e.g. region might be different depending on where your AWS account primarily exists)

Deployment:

1. Go into `server` folder.
2. Run `make deploy STACK_NAME=<YOUR_STACK_NAME>`
