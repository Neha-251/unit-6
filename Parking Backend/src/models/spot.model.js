const mongoose = require("mongoose");

const spotSchema = mongoose.Schema(
    {
      spot_id: { type: "String", required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
);
const Spot = mongoose.model("spot",spotSchema);

module.exports = Spot;