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

    res.render('pages/home', {
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
    res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre');
});

router.get('/nome', (req: Request, res: Response) => {
    let nome : string = req.query.nome as string;

    res.render('pages/nome', {
        nome
    });
});

router.get('/idade', (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade : number = 0;

    if(req.query.ano) {
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });

});

export default router;