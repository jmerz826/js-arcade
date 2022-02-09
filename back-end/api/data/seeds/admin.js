/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt')
const adminPassword = process.env.ADMIN_PASSWORD || '123456'
const bcryptRounds = Number(process.env.BCRYPT_ROUNDS) || 10 

const password = bcrypt.hashSync(adminPassword, bcryptRounds)

 const users = [
  { username: "admin", password }
]

exports.seed = async function (knex) {
  await knex("admin").insert(users)
}
