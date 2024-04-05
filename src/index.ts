import validator from "validator";

let ip: string = '192.0.0.256';
let email: string = 'gzarzur@dev.com';

console.log(`Verificando se o email ${email} é valido: ${validator.isEmail(email)}`);
console.log(`Verificando se o ip ${ip} é válido: ${validator.isIP(ip)}`);