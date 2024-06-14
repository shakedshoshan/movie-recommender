// config.ts
const isDockerEnv = process.env.REACT_APP_ENVIRONMENT === 'docker';

export const API_BASE_URL = isDockerEnv ? 'http://server:4000' : 'http://localhost:4000';