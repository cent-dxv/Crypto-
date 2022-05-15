import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const NewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'bae17b013cmshc4d14ee4a24dd06p186a43jsn4ac4ecd6335d'};

    const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

    const createRequest = (url) => ({ url, headers:NewsApiHeaders });

    export const NewsApi =createApi({
        reducerPath : 'NewsApi',
        baseQuery : fetchBaseQuery ({baseUrl}),
        endpoints :(builder) => ({
            getNews :builder.query({ 
                query : ({newsCategory , count}) => createRequest(`news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            })
        })
    })

    export const { useGetNewsQuery } = NewsApi;


    
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
      export const { useGetPokemonByNameQuery } = pokemonApi;