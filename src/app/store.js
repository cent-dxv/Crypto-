import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi , pokemonApi} from "../services/cryptoApi";
import { NewsApi} from "../services/cryptoNewsapi";


export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(CryptoApi.middleware ),
});
