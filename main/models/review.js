const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    user: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    // image: { type: String, required: true },
    park_id: { type: Schema.Types.ObjectId, ref: 'park_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
