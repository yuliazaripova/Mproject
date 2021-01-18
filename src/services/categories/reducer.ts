import * as actions from './actions'
import { ICategoryState } from '../../redux/types'

export const initialStore: ICategoryState = {
    name: null,
    products: null
}

export default function categoryReducer(state = initialStore, action: { type: any; payload: any }) {
    switch (action.type) {
        case actions.SET_CATEGORY_NAME:
            return {
            ...state,
            name: action.payload
            }
        case actions.SET_CATEGORY_PRODUCTS:
            return {
            ...state,
            products: action.payload
            }
        default:
            return state;
        }
    }