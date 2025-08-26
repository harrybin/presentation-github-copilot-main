export default {
    //workaround for issue with vite in devcontainers: https://github.com/vitejs/vite/issues/16522
    server: {
    host: '127.0.0.1',
    // support tunnel e.g.: slidev -- --remote=mypassword --tunnel
    allowedHosts: true,
  }
};