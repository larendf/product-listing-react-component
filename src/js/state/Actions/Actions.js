import UPDATE_PRODUCTLIST from "../Constants/index";

export function updateProductList(payload) {
  return { type: "UPDATE_PRODUCTLIST", payload }
};