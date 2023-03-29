import { createStore } from 'redux';
import { testReducer } from '../redux/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();
export const store = createStore(testReducer, enhancer);
