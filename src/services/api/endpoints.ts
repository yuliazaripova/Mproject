import queryString from "query-string"

export const GET_CATEGORY_NAME_ENDPOINT = (query?: {
  category_id?: number
}) => {
  return `a/product/category&${queryString.stringify(query || {}, {
    arrayFormat: "none",
  })}`
}

export const GET_CATEGORY_PRODUCTS_ENDPOINT= (query?: {
  category_id?: number
  page?: number
  limit?: number
}) => {
  return `a/product/filter&${queryString.stringify(query || {}, {
    arrayFormat: "none",
  })}`
}

export const GET_SINGLE_PRODUCT_ENDPOINT = (query?: {
  product_id?: number
}) => {
  return `a/product/product&${queryString.stringify(query || {}, {
    arrayFormat: "none",
  })}`
}
