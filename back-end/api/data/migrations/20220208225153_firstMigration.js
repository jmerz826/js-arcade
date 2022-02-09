/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
   await knex.schema
     .createTable("reaction-speed", (table) => {
      table.increments()
      table.string("name", 128).notNullable()
      table.integer("score").notNullable()
     })
     .createTable('admin', (table) => {
       table.increments('id')
       table.string('username', 128).notNullable()
       table.string('password').notNullable()
    })   
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema
      .dropTableIfExists("reaction-speed")
      .dropTableIfExists("admin")
  }
  