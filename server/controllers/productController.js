import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProductByID = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json({ success: true, product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (product) {
      res.status(200).json({ success: true, product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.status(200).json({ success: true, product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export {
  getProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
};
