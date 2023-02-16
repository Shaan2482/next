import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: String },
    numReviews: { type: Number },
    countInStock: { type: Number, required: true },
    description: { type: String, },
    author: { type: String },
    savedAmount: { type: Number },
    discount: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.product || mongoose.model("product", productSchema);
export default Product;
                          