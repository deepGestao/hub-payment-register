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
        zipCode: { S: `${content.content.address.zip_code}` },
        streetName: { S: `${content.content.address.street_name}` },
        streetNumber: { S: `${content.content.address.street_number}` },
        name: { S: `${content.content.first_name}` },
        lastName: { S: `${content.content.last_name}` },
        document: { S: `${content.content.identification.number}` },
      },
    })
    .promise();
};

export { sendDynamoDbRequest };
