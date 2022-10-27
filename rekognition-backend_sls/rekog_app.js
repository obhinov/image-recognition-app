const { RekognitionClient, DetectLabelsCommand } = require('@aws-sdk/client-rekognition');
const { LexModelBuildingService } = require('aws-sdk');

const handler = async (event) => {
  //const bucket_name = event.Records[0].s3.bucket.name;
  //const key_name = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const key_name = event.pathParameters.key
  let response = {};
  try {
    const client = new RekognitionClient();
    const command = new DetectLabelsCommand({
      Image: {
        S3Object: {
          Bucket: "band-pics-uploader-bucket",
          Name: key_name
        }
      },
      Attributes: ["ALL"]
    });
    const rekog_body = await client.send(command);
    console.log(rekog_body);

    response.body = JSON.stringify(rekog_body.Labels);
    response.statusCode = 200;

    response.headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    };

    return (response);

  } catch (error) {
    console.log(error);

    response.body = error;
    response.statusCode = 500;
    return (response);
  } 
};

module.exports = {
  handler
}













// FOR TESTING PURPOSES ONLY
/*
const { RekognitionClient, DetectLabelsCommand } = require('@aws-sdk/client-rekognition');

const run = async () => {
  try {
    const client = new RekognitionClient();
    const command = new DetectLabelsCommand({
      Image: {
        S3Object: {
          Bucket: "band-pics",
          Name: "beatles_pic1.jpg"
        }
      },
      Attributes: ["ALL"]
    });
    const response = await client.send(command);
    //console.log(response.Labels);
    return (response);
  } catch (error) {
    console.log(error);
    return (error);
  } 
};
run();
*/