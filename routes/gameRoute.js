const mongoose = require('mongoose');
const Games = require('../models/Games');

module.exports = (app) => {

    app.get(`/api/getList`, async (req,res) => {
      console.log(Games);
        let gamemodels = await Games.find();
        console.log(gamemodels);
        return res.status(200).send(gamemodels);
        // res.json(list);
    });

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}