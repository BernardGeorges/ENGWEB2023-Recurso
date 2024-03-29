var mongoose = require('mongoose');


var operacaoSchema = new mongoose.Schema({
        _id: false,
        codigo: String,
        nome: String,
        descricao: String
});
      
var consultaSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  nome: String,
  nif: Number,
  idade: Number,
  sexo: String,
  data: String,
  nr_operacoes: Number,
  operacoes: [operacaoSchema]
});


module.exports = new mongoose.model('consultas',consultaSchema);