/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    await knex.schema.createTable("reaction-speed", (table) => {
      table.increments()
      table.string("user", 128).notNullable()
      table.integer("score").notNullable()
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("reaction-speed")
  }
  