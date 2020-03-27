import compression from 'compression';
import next from 'next';
import express, {Request, Response} from 'express';
import httpProxy from 'http-proxy';
import debug from 'debug';


const PORT = process.env.PORT ?? 3000;
const dev = process.env.NODE_ENV !== 'production';

const clientApp = next( {dev} );
const handleRender = clientApp.getRequestHandler();

const API_PORT = process.env.API_PORT ?? 3010;


const apiProxy = httpProxy.createProxyServer({
  target:`http://localhost:${API_PORT}/graphql`
});

clientApp.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.use('/api', (req: Request, res: Response) => {
    apiProxy.web(req, res);
  });

  server.all('*', (req: Request, res: Response) => handleRender(req, res));

  server.listen(PORT, () => {

    debug(`> 🚀 Ready on http://localhost:${PORT}`);
  });
});

export {};