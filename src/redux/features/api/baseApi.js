import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints: (builder) =>({
    getPokemonByName: builder.query({
        query : () => "/pokemon",
    }),
    getPokemonById: builder.query({
      query: (id)=> `/pokemon/${id}` //onlysingle value id /status , not id,status
    })
  }),
});

export const {useGetPokemonByNameQuery , useGetPokemonByIdQuery} = baseApi
export default baseApi;
