import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB();

const verifyIfCustomerExists = async (email) => {
  const response = await dynamodb
    .query({
      TableName: `hub-payment-customers-${process.env.AWS_ENV}`,
      IndexName: 'email-index',
      KeyConditionExpression: '#email = :email',
      ExpressionAttributeNames: {
        '#email': 'email',
      },
      ExpressionAttributeValues: {
        ':email': { S: email },
      },
    })
    .promise();
  const exists = (response.Items && response.Items.length > 0);
  return {
    token: exists ? response.Items[0].token.S : '',
    exists,
  };
};

export { verifyIfCustomerExists };
