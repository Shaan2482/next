//Get : http://localhost:3000/api/products

import Product from "backend/models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (!products) return res.status(404).json({ error: "Data Not Found" });

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching the data" });
  }
};

//Get : http://localhost:3000/api/products/:productId

export const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.query;
    if (productId) {
      const product = await Product.findById(productId);

      res.status(200).json(product);
    }
    res.status(404).json({ error: "product not selected....." });
  } catch (error) {
    res.status(404).json({ error: "cannot get product" });
  }
};

//Post : http://localhost:3000/api/products

export const CreateProduct = async (req, res) => {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provide" });

    Product.create(formData, (err, data) => {
      return res
        .status(201)
        .json({ message: "Product Successfully Created" }, data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

//Put : http://localhost:3000/api/products

export const UpdateProduct = async (req, res) => {
  try {
    const { productId } = req.query;
    const formData = req.body;

    if (productId && formData) {
      const product = await Product.findByIdAndUpdate(productId, formData);
      res.status(200).json(product);
    }
    res.status(404).json({ error: "ProductId Not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while updating the data....." });
  }
};

//Delete : http://localhost:3000/api/products

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Product.findByIdAndDelete(productId);
      return res.status(200).json({ deleted: productId });
    }
    res.status(404).json({ error: "Product not selected.....!" });
  } catch (error) {
    res.status(404).json({ error: "Error while delete the product....." });
  }
};
