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
  const { data: id } = await axios.post(
    process.env.MERCARDO_PAGO_REGISTER,
    content,
    getConfig(token),
  );
  return id;
};

export { requestGateway };
