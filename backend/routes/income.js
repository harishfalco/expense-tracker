const express = require("express");
const { addTransaction, getAllTransaction , removeTransaction , getTransactionId } = require("../controllers/income");
const router = express.Router();


router.post("/income",addTransaction);
router.get("/view",getAllTransaction);
router.delete("/view/:transId",getTransactionId, removeTransaction);

module.exports = router;