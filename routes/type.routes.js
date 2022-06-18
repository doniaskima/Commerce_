const {
    getTypes,
    createType,
    getType,
    deleteType,
    updateType,
} = require("../controllers/type.controllers");

const router = require("express").Router();

router.get("/", getTypes);
router.get('/:typeId', getType)
router.delete("/:typeId", deleteType);
router.put("/:typeId", updateType);
router.post("/", createType);

module.exports = router;