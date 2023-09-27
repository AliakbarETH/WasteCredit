const express = require("express");
const router = express.Router();
const storeController = require("../controller/storeController");

router.get("/", storeController.getAllStores);
router.post("/createStore", storeController.createStore);
router.post("/getStoreById", storeController.getStoreById);
router.put("/updateStore", storeController.updateStore);
router.delete("/deleteStore", storeController.deleteStore);

module.exports = router;
