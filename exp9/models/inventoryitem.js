const mongoose = require('mongoose');
const inventoryitemschema = new mongoose.schema({
    name: {type: String, required: true},
    quantity: {type: String, required: true}
});
const inventoryitem= mongoose.model('inventoryitem', inventoryitemschema);
module.exports = inventoryitem;