import axios, { AxiosInstance } from "axios";
const https = require('https');

// global url
// const BASE_URL = "http://172.16.14.23:9090";

// local url
const BASE_URL = "http://45.130.148.122:27";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
httpsAgent: new https.Agent({
    rejectUnauthorized: false, // This allows Axios to accept self-signed certificates or invalid certs
  }),
});

export default axiosInstance;