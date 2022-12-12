import { pool } from '../db/index.js'

export async function getAllBrands () {
  const sqlQuery =
      'SELECT * FROM brand'
  const result = await pool.query(sqlQuery)
  const brands = result.rows
  return brands
}

export async function getBrandByID (id) {
  const data = await pool.query(
    'SELECT * FROM brand WHERE brand_id = $1',
    [id]
  )
  return data.rows[0]
}

export async function createBrand (newBrand) {
  const data = await pool.query(
    'INSERT INTO brand (brand_name) VALUES ($1) RETURNING *;',
    [newBrand.brand_name]
  )
  return data.rows[0]
}

export async function updateBrand (id, updatedBrand) {
  const data = await pool.query(
    'UPDATE brand SET brand_name = $1 WHERE brand_id = $2 RETURNING *;',
    [updatedBrand.brand_name, id]
  )
  return data.rows[0]
}

export async function deleteBrand (id) {
  const data = await pool.query(
    'DELETE FROM brand WHERE brand_id = $1 RETURNING *;',
    [id]
  )
  return data.rows[0]
}
