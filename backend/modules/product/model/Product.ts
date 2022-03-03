
import mongoose = require("mongoose");
const Schema  = mongoose.Schema;

let Product = new Schema(
  {
 

    name: {
      type: String,
    },
    stock: {
      type: Number,
    },
    price: {
      type: Number,
    }
   
  },
  {
     timestamps: true ,
    collection: "products",
  }
);





module.exports = mongoose.model("product", Product);
