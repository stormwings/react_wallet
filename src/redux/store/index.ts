import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './../reducers';

// persist authentication reducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};
const persistedReducer = persistReducer(persistConfig, reducers);

// export persisted reducer with middlewares
export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

  let persistor = persistStore(store);
  return { store, persistor };
};
