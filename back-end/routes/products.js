import express from 'express'
import * as productModel from '../models/products.js'

export const productRouter = express.Router()

productRouter.get('/', async function (req, res) {
  const product = await productModel.getAllProducts()

  res.status(200).json({
    success: true,
    payload: product
  })
})

productRouter.get('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const product = await productModel.getProductByID(id)

  res.status(200).json({
    success: true,
    payload: product
  })
})

productRouter.post('/', async function (req, res) {
  console.log(req.body)
  const newProduct = req.body
  const result = await productModel.createProduct(newProduct)
  res.status(201).json({ success: true, payload: result })
})

productRouter.patch('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const data = req.body
  const result = await productModel.updateProduct(id, data)
  res.json({ success: true, payload: result })
})

productRouter.delete('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const result = await productModel.deleteProduct(id)
  res.json({ success: true, payload: result })
})

export default productRouter
