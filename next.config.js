const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        emailFrom,
        emailFromPass,
        emailTo,
      },
      reactStrictMode: true,
    };
  }

  return {
    reactStrictMode: true,
  };
};
