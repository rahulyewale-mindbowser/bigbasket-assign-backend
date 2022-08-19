const {Product} = require('../models/product.model')

exports.findall=(req,res)=>{
    Product.find()
      .then(data =>{
        if(!data){
          res.status(404).send({
            message:"Products Not Found"
          });
        }else{
            res.status(200).send({data,message:"data fetched successfully"})
          }
       
      }).catch(err=>{
        res.send(err)
      })
  }


  exports.findByCategory=(req,res)=>{
    const category =req.query.category
    Product.find({category:category})
      .then(data =>{
        if(!data){
          res.status(404).send({
            message:"Products Not Found"
          });
        }else{
            res.status(200).send({data,message:"data fetched successfully"})
          }
       
      }).catch(err=>{
        res.send(err)
      })
  }