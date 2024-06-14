// config.js
const isDockerEnv = process.env.NODE_ENV === 'docker';

const flaskApiBaseUrl = isDockerEnv ? 'http://flask:5000' : 'http://localhost:5000';

module.exports = {
  flaskApiBaseUrl
};