import React from 'react';
import ReactDOM from 'react-dom';
import AsyncApp from './containers/AsyncApp';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <AsyncApp />
  </Provider>,
  document.getElementById('root')
);
