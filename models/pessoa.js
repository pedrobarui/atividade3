// SHEMAS 
const mongoose = require('mongoose')
// primeira {} é a definição e depois a {} de opções
const shema = new mongoose.Schema({
nome: {
    // qual tipo do atributo
    type:String,
    // para saber se é obrigatório ou não o atributo, usamos required
    required:true
}

// timestamps cria duas variáveis, uma para armazenar a criação do registro e uma para data de atualização
},{timestamps:true})

//CRIANDO MODELO PRA COLLECTION (entidade/model)
const Pessoa = mongoose.model('pessoa', shema)

// EXPORTANDO MÓDULO
module.exports=Pessoa