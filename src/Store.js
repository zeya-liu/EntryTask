import {
    createStore, combineReducers, applyMiddleware
  } from 'redux';
  import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // 为了安全考虑，只在开发模式下开启
  // import {routerReducer} from 'react-router-redux';
  import createPromiseMiddleware from 'redux-promise-middleware';
  import appReducer from './compoent/reducer';
  import taskReducer from './pages/TaskManagement/reducer';
  

  const reducer = combineReducers({
    app: appReducer,
    task: taskReducer,
  });
  
  const middlewares = [createPromiseMiddleware()];
  
  // 支持 redux devtools
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  
  const storeEnhancers = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );
  
  const initialState = {};
  export default createStore(reducer, initialState, storeEnhancers);
  