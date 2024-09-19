import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB();

const sendDynamoDbRequest = async (content, gatewayId) => {
  await dynamodb
    .putItem({
      TableName: `hub-payment-customers-${process.env.AWS_ENV}`,
      Item: {
        token: { S: content.token },
        originId: { S: `${content.origin}|${content.id}` },
        createdAt: { S: `${new Date().toISOString()}` },
        contact: { S: content.contact },
        request: { S: JSON.stringify(content.content) },
        gatewayId: { S: `mercadopago|${gatewayId}` },
        email: { S: content.content.email },
      },
    })
    .promise();
};

export { sendDynamoDbRequest };
