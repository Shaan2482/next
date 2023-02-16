import {
  CreateProduct,
  deleteProduct,
  getAllProducts,
  UpdateProduct,
} from "backend/controller/productController";
import dbConnect from "backend/database/db";

export default function handler(req, res) {
  dbConnect().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  //type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getAllProducts(req, res);
      break;
    case "POST":
      CreateProduct(req, res);
      break;
    case "PUT":
      UpdateProduct(req, res);
      break;
    case "DELETE":
      deleteProduct(req, res);
      break;

    default:
      res.setHeader("Allow"[("GET", "POST", "PUT", "DELETE")]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
