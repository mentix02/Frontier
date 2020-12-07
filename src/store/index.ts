import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import { compose, createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducer";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage: storage,
  blacklist: ["cards"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);

export const persistor = persistStore(store);

export default store;
