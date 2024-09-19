import uuid4 from 'uuid4';
import { parseRequest } from './parseRequest/parseRequest';
import { requestGateway } from './requestGateway/requestGateway';
import { sendDynamoDbRequest } from './sendDynamoDbRequest/sendDynamoDbRequest';

const handler = async (event, context) => {
  console.log(event, context);
  try {
    const content = JSON.parse(event.body);
    content.token = content.token || uuid4();
    const validate = parseRequest(content);
    if (validate) {
      const id = await requestGateway(content);
      await sendDynamoDbRequest(content, id);
      return {
        statusCode: 200,
        body: JSON.stringify({ token: content.token }),
      };
    }
    return {
      statusCode: 400,
      body: '{}',
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'internal server error' }),
    };
  }
};

export { handler };
