const { response } = require('express');

const usuariosGet = (req, res = response) => {

  const {q, apiKey} = req.query;

  res.json({
    msg: 'get API - controlador',
    q, 
    apiKey
  });    
}

const usuariosPost = (req, res = response) => {

  const { id } = req.params;

  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - controlador',
    nombre, 
    edad,
    id
  });    
}

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador'
  });    
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador'
  });    
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosDelete
}