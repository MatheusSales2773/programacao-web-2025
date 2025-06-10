const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/cadastro_usuario', usuarioController.getCadastroView);
router.get('/acessar', usuarioController.getLoginView);
router.get('/sair0', usuarioController.sair);

router.post('/cadastrar_usuario', usuarioController.postCadastrarUsuario);
router.post('/autenticar', usuarioController.postAuntenticarUsuario);

module.exports = router;