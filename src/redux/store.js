import { configureStore } from "@reduxjs/toolkit"; // No need to import getDefaultMiddleware separately
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";

// Persist config for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist:["auth"],
};

// Persisted reducer combining persistConfig and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the store with the persisted reducer and middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => // getDefaultMiddleware is part of configureStore, so accessed here
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoring non-serializable values for redux-persist actions
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignoring paths that may contain non-serializable values
        ignoredPaths: ['register'],
      },
    }),
});

// Creating the persistor
const persistor = persistStore(store);

export { store, persistor };
