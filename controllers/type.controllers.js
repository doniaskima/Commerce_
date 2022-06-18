const typeModels = require("../models/type.models");

const createType = async(req, res) => {
    const newType = new typeModels({
        fruit: req.body.fruit,
        vegetable: req.body.vegetable,
    });
    try {
        const savedType = await newType.save();
        return res.status(200).json(savedType);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getTypes = async(req, res) => {
    try {
        const types = await typeModels.find();
        return res.status(200).json(types);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const getType = async(req, res) => {
    const id = req.params.typeId;
    try {
        const type = await typeModels.findById(id);
        return res.status(200).json(type);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const deleteType = async(req, res) => {
    const id = req.params.typeId;
    try {
        const type = await typeModels.findByIdAndDelete(id);
        return res.status(200).json(type);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const updateType = async(req, res) => {
    const id = req.params.typeId;
    try {
        const type = await typeModels.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(type);
    } catch (err) {
        return res.status(500).json(err);
    }
};
module.exports.createType = createType;
module.exports.getTypes = getTypes;
module.exports.getType = getType;
module.exports.deleteType = deleteType;
module.exports.updateType = updateType;