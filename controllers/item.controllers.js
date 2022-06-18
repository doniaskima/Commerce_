const itemModels = require("../models/item.models");

const createItem = async(req, res) => {
    const newItem = new itemModels({
        name: req.body.name,
        price: req.body.price,
        inStockQuantity: req.body.inStockQuantity,
        type: req.body.type,
    });
    try {
        const savedItem = await newItem.save();
        return res.status(200).json(savedItem);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getItems = async(req, res) => {
    try {
        const items = await itemModels.find();
        return res.status(200).json(items);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const getItem = async(req, res) => {
    const id = req.params.itemId;
    try {
        const item = await itemModels.findById(id);
        return res.status(200).json(item);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const deleteItem = async(req, res) => {
    const id = req.params.studentId;
    try {
        const item = await itemModels.findByIdAndDelete(id);
        return res.status(200).json(item);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const updateItem = async(req, res) => {
    const id = req.params.itemId;
    try {
        const item = await itemModels.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(item);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const getItemsByType = async(req, res) => {
    try {
        const items = await itemModels.find({
            type: req.params.typeId,
        });
        return res.status(200).json(items);
    } catch (err) {
        return res.status(500).json(err);
    }
};
module.exports.createItem = createItem;
module.exports.getItems = getItems;
module.exports.getItem = getItem;
module.exports.deleteItem = deleteItem;
module.exports.updateItem = updateItem;
module.exports.getItemsByType = getItemsByType;