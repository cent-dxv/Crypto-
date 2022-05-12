import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi , pokemonApi} from "../services/cryptoApi";



export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(CryptoApi.middleware),
});
