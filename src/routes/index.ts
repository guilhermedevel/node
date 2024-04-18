import { Router, Request, Response } from "express";
import { title } from "process";

const router = Router();

router.get('/', (req: Request, res: Response) =>{
    let name: string = 'Guilherme';
    let age: number = 17;
    let showOld: boolean = false;

    if (age > 17) {
        showOld = true;
    };

    res.render('home', {
        name,
        lastName: 'Zarzur',
        age,
        showOld,
        products: [
            {title: 'Produto X', price: 10.00},
            {title: 'Produto Y', price: 20.00},
            {title: 'Produto Z', price: 30.00},
        ],
        frasesDoDia: []
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Página de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa')
});

export default router;