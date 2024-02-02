import { Product } from "../models/product.model.js";
import { asynchandler } from "../utils/asynchandler.js";
import { ApiError, ApiResponse } from "../utils/response.js";

const getAllProducts = asynchandler(async (req, res) => {
  const { page = 1, limit = 2 } = req.query;
  // Convert page and limit to numbers
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);
  // Validate if page and limit are valid numbers
  if (
    isNaN(pageNumber) ||
    isNaN(limitNumber) ||
    pageNumber < 1 ||
    limitNumber < 1
  ) {
    throw new ApiError(400, "page & limit not exist");
  }
  const products = await Product.aggregatePaginate(
    {},
    {
      page: pageNumber,
      limit: limitNumber,
    }
  );
  if (!products) {
    throw new ApiError(500, "Faild to fetch products");
  }
  res
    .status(200)
    .json(new ApiResponse(200, products, "products fetched succesfully"));
});

export { getAllProducts };
