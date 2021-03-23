const devBaseURL = "开发时后端服务";
const proBaseURL = "生产时后端服务";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;
