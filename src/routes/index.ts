import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) =>{
    res.send('Home');
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Página de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa')
});

export default router;