import { pool } from '../db/index.js'

export async function getAllBrands () {
  const sqlQuery =
      'SELECT * FROM brand'
  const result = await pool.query(sqlQuery)
  const brands = result.rows
  return brands
}
