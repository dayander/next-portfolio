// @ts-ignore
const next = require('next');
//import next from 'next';
// @ts-ignore
const express = require('express');

const httpProxy = require('http-proxy');


const PORT = process.env.PORT ?? 3000;
// @ts-ignore
const dev = process.env.NODE_ENV !== 'production';
// @ts-ignore
const clientApp = next( {dev} );
const handleRender = clientApp.getRequestHandler();

// @ts-ignore
const API_PORT = process.env.API_PORT ?? 3010;

//const API_PORT = process.env.API_PORT ?? 3010;

const apiProxy = httpProxy.createProxyServer({
  target:`http://localhost:${API_PORT}`
});

clientApp.prepare().then(() => {
  const server = express();

  server.use('/api', (req: Request, res: Response) => {
    apiProxy.web(req, res);
  });

  server.all('*', (req: Request, res: Response) => handleRender(req, res));

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`> \`🚀 Ready on http://localhost:${PORT}`);
  });
});
//@ts-ignore
export {};