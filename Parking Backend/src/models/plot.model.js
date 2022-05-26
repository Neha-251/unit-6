const mongoose = require("mongoose");

const plotSchema = mongoose.Schema(
    {
      spot_id: { type: "String", required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
);
const Plot = mongoose.model("plot",plotSchema);

module.exports = Plot;