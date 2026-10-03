const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Review = require("./Review.js");

const listingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  quantity: {
    type: Number,
    default: 0,
    min : 0
  },

  unitPrice: {
    type: Number,
    default: 0,
  },

  supplier: {
    type: String,
    default : "nothing@gmail.com"
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

updatedAt: [
    {
        time: {
            type: Date,
            default: Date.now
        },
        used: {
            type: Number,
            required: true
        }
    }
],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
