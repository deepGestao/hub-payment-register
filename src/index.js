import { parseRequest } from './parseRequest/parseRequest';
// import { requestGateway } from './requestGateway/requestGateway';

const handler = (event, context) => {
  console.log(event, context);
  try {
    const content = JSON.parse(event.body);
    const validate = parseRequest(content);
    console.log(validate);
    if (validate) {
      // const id = await requestGateway(content);
      // console.log(id);
      return {
        statusCode: 200,
        body: '{}',
      };
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'internal server error' }),
    };
  }
};

export { handler };
