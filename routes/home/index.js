"use strict";

const express = require("express");
const router = express.Router();

// "/" 경로로 GET 요청이 들어오면 index.ejs 템플릿을 렌더링
router.get("/", (req, res)=>{
    res.render("home/index");
});

router.get("/login",(req, res) =>{
    res.render("home/login");
});

module.exports = router;