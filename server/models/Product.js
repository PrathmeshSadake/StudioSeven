import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      maxLength: [100, "Product name cannot be longer than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      trim: true,
      maxLength: [10, "Product price cannot be longer than 10 characters"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
      trim: true,
      maxLength: [
        1000,
        "Product description cannot be longer than 1000 characters",
      ],
    },
    ratings: {
      type: Number,
      maxLength: [2, "Product ratings cannot be longer than 2 characters"],
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter product category"],
      enum: {
        values: [
          "Topwear",
          "Bottomwear",
          "Footwear",
          "Sports & Active Wear",
          "Western Wear",
          "Indian & Fusion Wear",
          "Beauty & Personal Care",
        ],
        message: "Product category is invalid",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
      default: 0,
      maxLength: [5, "Product stock cannot be longer than 5 characters"],
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comments: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
