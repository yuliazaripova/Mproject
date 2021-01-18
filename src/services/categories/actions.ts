import { GET_CATEGORY_NAME_ENDPOINT, GET_CATEGORY_PRODUCTS_ENDPOINT, GET_SINGLE_PRODUCT_ENDPOINT } from "../api/endpoints";

export const FETCH_CATEGORY_NAME = 'FETCH_CATEGORY_NAME';
export const fetchCategoryName = (id:number) => ({
  type: FETCH_CATEGORY_NAME,
  request: {
   url: GET_CATEGORY_NAME_ENDPOINT({
      category_id: id
   })
  },
});

export const FETCH_CATEGORY_PRODUCTS = 'FETCH_CATEGORY_PRODUCTS';
export const fetchCategoryProducts = (id:number, page:number, limit: number) => ({
  type: FETCH_CATEGORY_PRODUCTS,
  request: {
    url: GET_CATEGORY_PRODUCTS_ENDPOINT({
      category_id: id,
      page,
      limit,
   })
  },
});

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';
export const fetchSingleProduct = (id:number | undefined) => ({
  type: FETCH_SINGLE_PRODUCT,
  request: {
    url: GET_SINGLE_PRODUCT_ENDPOINT({
      product_id: id
    })
  },
});
