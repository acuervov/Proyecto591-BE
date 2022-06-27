const {Router} = require('express');
//importar modelo de producto

const ProductRouter = Router();

ProductRouter.get('', (req, res)=>{
    res.send("esta ruta funciona");
})

module.exports = ProductRouter; 