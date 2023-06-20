var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:16016/consultas")
    .then(dados=>{
      res.render('listaDB', { consultas: dados.data });
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de exames" });
    })
});

router.get('/intervencoes/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16016/consultas")
      .then(dados=>{
        res.render('operacao', { operacoes: dados.data,code:req.params.id });
      })
      .catch(erro=>{
    
      })

  
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16016/consultas/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('perfil', { consulta: dados.data });
      })
      .catch(erro=>{
    
      })

  
});



module.exports = router;
