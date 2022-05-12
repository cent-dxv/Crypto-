// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': 'bae17b013cmshc4d14ee4a24dd06p186a43jsn4ac4ecd6335d'
//     }
//   };
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  "x-rapidapi-host": 'coinranking1.p.rapidapi.com',
  "x-rapidapi-key": 'bae17b013cmshc4d14ee4a24dd06p186a43jsn4ac4ecd6335d',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers:cryptoApiHeaders });

export const CryptoApi =createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery ({baseUrl}),
    endpoints :(builder) => ({
        getCryptos :builder.query({ 
            query : () => createRequest('/coins')
        })
    })
})
export const {useGetCryptosQuery} = CryptoApi;



// Need to use the React-specific entry point to import createApi


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi