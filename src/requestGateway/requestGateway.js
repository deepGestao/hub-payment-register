import axios from 'axios';
import { getAccessToken } from '../getAccessToken/getAccessToken';

const getHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

const getConfig = (token) => ({
  headers: getHeaders(token),
  timeout: 20000,
});

const requestGateway = async (content) => {
  const token = await getAccessToken();
  const { data } = await axios.post(
    process.env.MERCADO_PAGO_REGISTER,
    content.content,
    getConfig(token),
  );
  return data.id;
};

export { requestGateway };
