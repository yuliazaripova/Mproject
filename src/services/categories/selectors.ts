import { getQuery, QueryState } from "@redux-requests/core";
import { createSelector } from "@reduxjs/toolkit";
import { ICategoryState } from "../../redux/types";
import { FETCH_CATEGORY_NAME, FETCH_CATEGORY_PRODUCTS } from "./actions";

// export const getCategoryName = (state:ICategoryState) => state.name;
// export const getCategoryProducts = (state:ICategoryState) => state.products;
export interface IName {
    name: name
}

type name = string | null

export const getCategoryNameState =  (state: any) =>
getQuery<IName>(state, { type: FETCH_CATEGORY_NAME })

export const getCategoryNameLoading = createSelector(getCategoryNameState, (data:QueryState<IName>) => data.loading)

export const getCategoryNameData = createSelector(getCategoryNameState, (data:QueryState<IName>) => data.data || {})

export const getCategoryName = createSelector(getCategoryNameData, (data) => data.name)

interface IProductsData {
    page: number,
    total: number,
    rows: IProduct[]
}

interface IProduct {
    id: number,
    cell?: {
        name: string,
        thumb: string
    }
}



export const getCategoryProductsState =  (state: any) =>
getQuery<IProductsData>(state, { type: FETCH_CATEGORY_PRODUCTS })

export const getCategoryProductsLoading = createSelector(getCategoryProductsState, (data:QueryState<IProductsData>) => data.loading)

export const getCategoryProductsData = createSelector(getCategoryProductsState, (data:QueryState<IProductsData>) => data.data)

export const getCategoryProducts = createSelector(getCategoryProductsData, (data) => data.rows)