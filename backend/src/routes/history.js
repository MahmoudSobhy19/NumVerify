const express = require("express");
const router = express.Router();
const historyController = require("../controller/historyController");

router.get("/", historyController.getHistory);

router.get("/:number", historyController.searchForPhoneNumber);

router.post("/", historyController.createHistory);

module.exports = router;
