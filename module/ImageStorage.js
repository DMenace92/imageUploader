const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImageChunk = new Schema({
  data: { type: Buffer }
})


const ImageStorageSchema = new Schema({
  filename: {
    type: String,
  },
  data: {
    type: Buffer,
  },
  contentType: {
    type: String,
  },
  largeData: {
    type: [ImageChunk]
  }

})
const Image = mongoose.model("Image", ImageStorageSchema);
module.exports = Image;