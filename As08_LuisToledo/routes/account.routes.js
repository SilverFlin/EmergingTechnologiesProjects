const { Router } = require("express");
const AccountController = require("../controllers/account.controller.js");

const router = Router();

router.get("/", AccountController.getAllAccounts);
router.get("/:id", AccountController.getAccountById);
router.post("/", AccountController.createAccount);
router.put("/:id", AccountController.updateAccount);
router.delete("/:id", AccountController.deleteAccount);

module.exports = router;
