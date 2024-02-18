import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice.js";
import casesReducer from "./features/caseSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cases: casesReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// const RootState = store.getState();
// const AppDispatch = store.dispatch;

// module.exports = {
//   store,
//   persistor,
//   // RootState,
//   // AppDispatch,
// };
