import express, {Request, Response} from 'express';
import mainRouters from './routes/index';
import painelRouters from './routes/painel';

const server = express();

server.use('/', mainRouters);
server.use('/painel', painelRouters);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(80);