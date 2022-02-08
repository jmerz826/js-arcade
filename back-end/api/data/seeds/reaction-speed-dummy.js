/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const leaderboard = [
  { name: "Walter", score: 85191292 },
  { name: "Jesse", score: 51894148 },
  { name: "Hank", score: 96518478 },
  { name: "Flynn", score: 85189748 },
  { name: "Saul", score: 8948916 },
]

exports.seed = async function (knex) {
  await knex("reaction-speed").insert(leaderboard)
}
