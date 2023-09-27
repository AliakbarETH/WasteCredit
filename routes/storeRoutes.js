const express = require("express");
const router = express.Router();
const storeController = require("../controller/storeController");

router.get("/", storeController.getAllStores);
router.post("/createStore", storeController.createStore);
router.get("/getStoreById/:id", storeController.getStoreById);
router.put("/updateStore/:id", storeController.updateStore);
router.delete("/deleteStore/:id", storeController.deleteStore);

module.exports = router;
