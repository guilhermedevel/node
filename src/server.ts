import express from 'express';
import mainRouters from './routes/index';
import painelRouters from './routes/painel';

const server = express();

server.use('/', mainRouters);
server.use('/painel', painelRouters);

server.listen(80);