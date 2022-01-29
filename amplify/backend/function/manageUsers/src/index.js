const AWS = require("aws-sdk");
const cognitoIdentityServiceProvider =
  new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
    region: "us-east-1",
    maxRetries: 5,
    retryDelayOptions: {base: 300},
  });
const USER_POOL_ID = "us-east-1_gWnSe6FAN";
const ENABLE_CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*"
};

exports.handler = async(event) => {

  try {
    const {username, operation} = event.pathParameters;
    let result = "";

    if (operation === "delete") {
      const userToDelete = {
        "Username": username,
        "UserPoolId": "us-east-1_gWnSe6FAN"
      };

      await cognitoIdentityServiceProvider.adminDeleteUser(userToDelete).promise();
      result = `"User wit username ${username} has been deleted successfully!"`;
    } else {
      const {email} = event.queryStringParameters;
      const userData = await cognitoIdentityServiceProvider.adminCreateUser(
        {
          "UserPoolId": USER_POOL_ID,
          "Username": username,
          "DesiredDeliveryMediums": [
            "EMAIL"
          ],
          "ForceAliasCreation": false,
          "UserAttributes": [
            {
              "Name": "email",
              "Value": email
            },
            {
              "Name": "email_verified",
              "Value": "true"
            }
          ]
        }).promise();

      await cognitoIdentityServiceProvider.adminSetUserPassword({
        "Username": username,
        "UserPoolId": USER_POOL_ID,
        "Password": "Passw0rd!@#$",
        "Permanent": true,
      }).promise();

      result = userData.User.Attributes[0].Value;
    }

    return {
      statusCode: 200,
      headers: ENABLE_CORS,
      body: JSON.stringify({
        status: "success",
        data: result,
      }),
    };
  } catch(e) {
    return {
      statusCode: 200,
      headers: ENABLE_CORS,
      body: JSON.stringify({
        status: "error",
        data: e.message,
      }),
    };
  }
};