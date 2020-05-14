deploy-s3:
	npm run build
	. ./deploy/upload-to-s3.sh