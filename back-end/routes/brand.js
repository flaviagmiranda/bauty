import express from 'express'
import * as brandModel from '../models/brand.js'

export const brandRouter = express.Router()

brandRouter.get('/', async function (req, res) {
  const brands = await brandModel.getAllBrands()

  res.status(200).json({
    success: true,
    payload: brands
  })
})

brandRouter.get('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const brand = await brandModel.getBrandByID(id)

  res.status(200).json({
    success: true,
    payload: brand
  })
})

brandRouter.post('/', async function (req, res) {
  console.log(req.body)
  const newBrand = req.body
  const result = await brandModel.createBrand(newBrand)
  res.status(201).json({ success: true, payload: result })
})

brandRouter.patch('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const data = req.body
  const result = await brandModel.updateBrand(id, data)
  res.json({ success: true, payload: result })
})

brandRouter.delete('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const result = await brandModel.deleteBrand(id)
  res.json({ success: true, payload: result })
})

export default brandRouter
