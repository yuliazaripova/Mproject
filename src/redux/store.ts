import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import categoryReducer from '../services/login/reducer'
import { ICategoryState } from './types'
import Reactotron from '../../ReactotronConfig'
import reducer, { requestsMiddleware } from './reducer'

export const store = createStore(reducer, applyMiddleware( ...requestsMiddleware))



