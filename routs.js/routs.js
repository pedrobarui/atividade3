// IMPORTANDO EXPRESS
const express = require('express')

// CRIANDO ROTEADOR
const router = express.Router()

// IMPORTANDO O CONTROLLER "Controlador de Pessoas"
const pessoaControlle = require('../controllers/pessoaController')

// CRIANDO AS ROTAS
// Usando o pessoaController com a função criar
router.post('/pessoas', pessoaControlle.criar)

// EXPORTANDO MÓDULO
module.exports=router