const mongoose = require("mongoose");

const floorSchema = mongoose.Schema(
    {
      floor_number: { type: "Number", required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
);
const Floor = mongoose.model("floor",floorSchema);

module.exports = Floor;