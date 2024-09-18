import { parseRequest } from './parseRequest/parseRequest';

const handler = (event, context) => {
  console.log(event, context);
  try {
    const content = JSON.parse(event.body);
    console.log(parseRequest(content));
    return {
      statusCode: 200,
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
