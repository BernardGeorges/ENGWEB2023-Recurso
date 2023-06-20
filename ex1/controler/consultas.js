var Consulta = require('../models/consultas')

// Consulta list
module.exports.getList = () =>{
    return Consulta.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getConsultaByID = id =>{
    return Consulta.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getConsultaBySex = sex =>{
    return Consulta.find({sexo: sex })
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getNomes = () =>{
    return Consulta.distinct('nome').sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getConsultaByGTAge = age =>{
    return Consulta.find({idade: { $gt: 80 }})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getInterv = () =>{
    return Consulta.aggregate([
        { $unwind: "$operacoes" },
        { $group: { _id: "$operacoes.codigo", operacoes: { $first: "$operacoes" } } },
        { $sort: { _id: 1 } },
        { $project: { _id: 0, operacoes: { $objectToArray: "$operacoes" } } },
        { $project: { operacoes: { $arrayToObject: "$operacoes" } } }
      ])
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.addConsulta = (consulta) => {
    return Consulta.collection.insertOne(consulta)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.deleteConsulta = id =>{
    return Consulta.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
