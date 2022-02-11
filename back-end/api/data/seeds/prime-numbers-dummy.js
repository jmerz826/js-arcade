/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const leaderboard = [
  { name: "Namath", score: 12 },
  { name: "Revis", score: 10 },
  { name: "Darnold", score: 9 },
  { name: "Cromartie", score: 5 },
  { name: "Mangold", score: 2 },
]

exports.seed = async function (knex) {
  await knex("prime-numbers").insert(leaderboard)
}
