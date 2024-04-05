"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let ip = '192.0.0.256';
let email = 'gzarzur@dev.com';
console.log(`Verificando se o email ${email} é valido:\n${validator_1.default.isEmail(email)}`);
console.log(`Verificando se o ip ${ip} é válido:\n${validator_1.default.isIP(ip)}`);
