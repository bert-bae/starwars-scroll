upload_to_s3() {
  echo "Uploading to S3 bucket name $S3_BUCKET..."
  aws s3 cp ./public/index.html s3://$S3_BUCKET/frontend/ --cache-control max-age=0
  aws s3 cp ./build/ s3://$S3_BUCKET/frontend/build/ --recursive
}

upload_to_s3