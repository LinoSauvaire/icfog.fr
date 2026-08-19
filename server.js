const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: false,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  if (typeof PhusionPassenger !== 'undefined') {
    server.listen('passenger');
  } else {
    server.listen(process.env.PORT || 3000);
  }
});
