"use strict";

const express = require("express");
const router = express.Router();   // 라우터 객체 생성

// 컨트롤러 파일일 불러옴 (변수 이름을 객체 이름과 동일하게 지정)
const ctrl = require("./home.ctrl"); 

// "/" 경로로 GET 요청이 들어오면 index.ejs 템플릿을 렌더링

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;