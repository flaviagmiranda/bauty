import { pool } from '../db/index.js'

export async function getAllProducts () {
  const sqlQuery =
      'SELECT * FROM products'
  const result = await pool.query(sqlQuery)
  const products = result.rows
  return products
}

export async function getProductByID (id) {
  const data = await pool.query(
    'SELECT * FROM products WHERE id = $1',
    [id]
  )
  return data.rows[0]
}

export async function createProduct (newProduct) {
  const data = await pool.query(
    'INSERT INTO products (brand, product_name, price, price_sign, currency, image_link, product_link, website_link, product_description, rating, category, product_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;',
    [newProduct.brand, newProduct.product_name, newProduct.price, newProduct.price_sign, newProduct.currency, newProduct.image_link, newProduct.product_link, newProduct.website_link, newProduct.product_description, newProduct.rating, newProduct.category, newProduct.product_type]
  )
  return data.rows[0]
}

export async function updateProduct (id, updatedProduct) {
  const data = await pool.query(
    'UPDATE products SET brand = $1, product_name = $2, price = $3, price_sign = $4, currency = $5, image_link = $6, product_link = $7, website_link = $8, product_description = $9, rating = $10, category = $11, product_type = $12 WHERE id = $13 RETURNING *;',
    [updatedProduct.brand, updatedProduct.product_name, updatedProduct.price, updatedProduct.price_sign, updatedProduct.currency, updatedProduct.image_link, updatedProduct.product_link, updatedProduct.website_link, updatedProduct.product_description, updatedProduct.rating, updatedProduct.category, updatedProduct.product_type, id]
  )
  return data.rows[0]
}

export async function deleteProduct (id) {
  const data = await pool.query(
    'DELETE FROM products WHERE id = $1 RETURNING *;',
    [id]
  )
  return data.rows[0]
}
