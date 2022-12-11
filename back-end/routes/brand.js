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
