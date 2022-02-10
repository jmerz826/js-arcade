const router = require("express").Router();
const bcrypt = require("bcrypt");
const { adminTokenBuilder } = require("./token-builder");
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

module.exports = router;
