// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const pg = require('pg')

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = {rejectUnauthorized: false}
}

const sharedConfig = {
  client: 'pg',
  migrations: { direcory: './api/data/migrations' },
  seeds: {directory: './api/seeds'}
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL
  },

  production: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    }
  }

}
