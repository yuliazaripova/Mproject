import * as actions from './actions'
import { IAuthStore } from '../../redux/types'

export const initialStore: IAuthStore = {
    email: null,
    password: null
}

export default function authReducer(state = initialStore, action: { type: any; payload: any }) {
    switch (action.type) {
        case actions.SET_EMAIL:
            return {
            ...state,
            email: action.payload
            }
        case actions.SET_PASSWORD:
            return {
            ...state,
            password: action.payload
            }
        default:
            return state;
        }
    }
