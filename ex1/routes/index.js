var express = require('express');
var router = express.Router();
var Consulta = require('../controler/consultas')

/* GET home page. */
router.get('/consultas', function(req, res, next) {
  if(req.query.idade){
    Consulta.getConsultaByGTAge(req.query.idade)
    .then(Consultas=>{
      res.json(Consultas)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de Consultas",error:erro })
    })
  }else if(req.query.sexo){
    Consulta.getConsultaBySex(req.query.sexo)
      .then(Consultas=>{
        res.json(Consultas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de Consultas",error:erro })
      })
  }
  else{
    Consulta.getList()
      .then(Consultas=>{
        res.json(Consultas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de Consultas",error:erro })
      })
  }
});

router.get('/consultas/nomes', function(req, res, next) {
  Consulta.getNomes()
    .then(Consulta=>{
      res.json(Consulta)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter Consulta",error:erro })
    })
});

router.get('/consultas/interv', function(req, res, next) {
  Consulta.getInterv()
    .then(Consulta=>{
      res.json(Consulta)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter Consulta",error:erro })
    })
});

router.get('/consultas/:id', function(req, res, next) {
  console.log(req.params.id)
  Consulta.getConsultaByID(req.params.id)
    .then(Consulta=>{
      res.json(Consulta)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter Consulta",error:erro })
    })
});

router.post('/consultas', function(req, res, next) {
  Consulta.addConsulta(req.body)
    .then(Consulta=>{
      res.status(201).json(Consulta)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar Consulta",error:erro })
    })
});


router.delete('/consultas/:id', function(req, res, next) {
  Consulta.deleteConsulta(req.params.id)
    .then(Consulta=>{
      res.json(Consulta)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar Consulta",error:erro })
    })
});

module.exports = router;
