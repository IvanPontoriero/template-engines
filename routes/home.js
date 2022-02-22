const { Router } = require('express');
const Productos = require('../models/productosClass');
const productos = new Productos('./productos.json');
const router = Router();

const getProductos = productos.getProductos();

router.get('/', (req, res) => {
    getProductos
        .then(data => {
            if(data) {
                res.render('main', {layout: 'index', productos: data});
            } else {
                res.status(404).send('No se encontraron produxtos');
            }
        });
});

module.exports = router;