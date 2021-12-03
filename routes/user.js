const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPatch, usuariosDelete } = require('../controllers/user.js');

const router = Router();

router.get('/', usuariosGet);

router.post('/:id', usuariosPost); 




module.exports = router; 