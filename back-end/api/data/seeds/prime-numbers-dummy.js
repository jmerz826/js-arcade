/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const leaderboard = [
  { name: "Jerry", score: 12 },
  { name: "George", score: 10 },
  { name: "Elaine", score: 9 },
  { name: "Kramer", score: 5 },
  { name: "Larry", score: 2 },
]

exports.seed = async function (knex) {
  await knex("prime-numbers").insert(leaderboard)
}
