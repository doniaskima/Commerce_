const {
    getItems,
    createItem,
    getItem,
    getItemsByType,
    deleteItem,
    updateItem,
} = require("../controllers/item.controllers");

const router = require("express").Router();

router.get("/", getItems);
router.get("/:typeId/type", getItemsByType);
router.get('/:itemId', getItem);
router.delete("/:itemId", deleteItem);
router.put("/:itemId", updateItem);
router.post("/", createItem);

module.exports = router;