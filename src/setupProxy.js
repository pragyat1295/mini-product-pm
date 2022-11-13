const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://media-content.ccbp.in/website/react-assignment/add_resource.json',
      changeOrigin: true,
    })
  );
};