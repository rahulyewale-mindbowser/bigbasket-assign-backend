const express = require('express')
const {findall, findByCategory }= require('../controller/products.controller')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Home route")
})
router.get('/all',findall)
router.get('/category',findByCategory)
module.exports= router