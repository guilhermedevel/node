type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Produto X', price: 10.00},
    {title: 'Produto Y', price: 20.00},
    {title: 'Produto Z', price: 30.00},
    {title: 'Produto G', price: 5.00}
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};