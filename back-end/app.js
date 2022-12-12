import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import brands from './routes/brand.js'
// import factsRouter from "./routes/facts.js";
import products from './routes/products.js'

const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use('/api/brands', brands)
// app.use("/api/facts", factsRouter);
app.use('/api/products', products)

export default app
