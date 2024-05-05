import {Request, Response} from 'express';

import { Product } from '../models/Product';

export const home = (req: Request, res: Response) =>{
    let name: string = 'Guilherme';
    let age: number = 17;
    let showOld: boolean = false;

    if (age > 17) {
        showOld = true;
    };

    let allProducts = Product.getAll();
    let filteredProducts = Product.getFromPriceAfter(11);

    res.render('pages/home', {
        name,
        lastName: 'Zarzur',
        age,
        showOld,
        products: allProducts,
        filteredProducts,
        frasesDoDia: []
    });
};