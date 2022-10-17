import logo from './logo.svg';
import './App.css';
import MainRouter from "./router";

import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
import rootReducer from "./reducer";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
