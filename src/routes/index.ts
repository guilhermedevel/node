import { Router } from "express";

import { home } from '../controllers/homeController';
import { contato, sobre } from '../controllers/infoController'
import { nome, idadeForm, idadeAction } from '../controllers/userController'

const router = Router();

router.get('/', home);

router.get('/contato', contato);
router.get('/sobre', sobre);

router.get('/nome', nome);
router.get('/idade', idadeForm);
router.post('/idade-resultado', idadeAction);

export default router;