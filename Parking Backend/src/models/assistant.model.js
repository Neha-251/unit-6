const mongoose = require("mongoose");

const assistantSchema = new mongoose.Schema(
    {
      assistant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
);
const Assistant = mongoose.model("assistant",assistantSchema);

module.exports = Assistant;