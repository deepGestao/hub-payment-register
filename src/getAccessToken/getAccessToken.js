import axios from 'axios';

const getRequestBody = () => ({
  client_id: process.env.MERCADO_PAGO_CLIENT_ID,
  client_secret: process.env.MERCADO_PAGO_CLIENT_SECRET,
  grant_type: 'client_credentials',

});

const getAccessToken = async () => {
  const { data } = await axios.post(`${process.env.MERCADO_PAGO_OAUTH}`, getRequestBody());
  return data.access_token;
};

export { getAccessToken };
