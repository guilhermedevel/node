import express, {Request, Response} from 'express';
import mainRouters from './routes/index';
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.use('/', mainRouters);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(80);