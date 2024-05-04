import {Request, Response} from 'express';

export const home = (req: Request, res: Response) =>{
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
};