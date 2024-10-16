const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        emailFrom:'gavinwang2024@gmail.com',
        emailFromPass:'gavinwang2024@gmail.com',
        emailTo:'gavinwang2024@gmail.com',
      },
      reactStrictMode: true,
    };
  }

  return {
    reactStrictMode: true,
  };
};
