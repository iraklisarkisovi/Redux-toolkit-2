import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Root2 } from '../Interfaces/User.Inter';

export const apiSlice = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Root2, { page: number; per_page: number }>({
      query: ({ page, per_page }) => `users?page=${page}&per_page=${per_page}`,
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
