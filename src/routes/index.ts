import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) =>{
    let name: string = 'Guilherme';
    let age: number = 34;
    let showOld: boolean = false;

    if (age > 17) {
        showOld = true;
    }

    res.render('home', {
        name,
        lastName: 'Zarzur',
        age,
        showOld
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Página de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa')
});

export default router;