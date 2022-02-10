const router = require("express").Router();
const bcrypt = require("bcrypt");
const { adminTokenBuilder, highScoreTokenBuilder } = require("./token-builder");
const db = require("../data/db-config");

function getAdmin() {
  return db("admin").first();
}

router.post("/login", async (req, res, next) => {
  try {
    const admin = await getAdmin();
    if (bcrypt.compareSync(req.body.password, admin.password)) {
      const token = adminTokenBuilder(req.body);
      res.status(200).json(token);
    } else {
      next({ status: 401, message: "incorrect password" });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/reaction-speed-high-score', (req, res, next) => {
  try {
    const token = highScoreTokenBuilder(req.body)
    res.status(200).json({message: 'new high score!', token})
  } catch (err) {
    next(err)
  }
})

module.exports = router;
