const express = require("express");
const router = express.Router();
const {addUser,login,getAuth,getAll,getOne} = require ('../controller/user')

router.post("/register",addUser);
router.post("/login",login);
router.get("/auth",getAuth);
router.get("/data",getAll);
router.get("/data/:_id",getOne )


module.exports = router;