import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';

// 扩展redux 大多数会使用 middleware 或 enhancer来扩展 redux store 功能
// middleware 扩展了 redux dispatch 函数的功能
// enhancer 扩展了 redux store 的功能

// redux-thunk middleware 允许了简单的 dispathc 异步用法
// 一个记录 dispatch 的 action 和得到新的 state 的 middleware
// 一个记录reducer 处理每个 action 所用时间的enhancer

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancer = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}
