'use-client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `https://thekanban.vercel.app/api`,
  // baseUrl: `http://localhost:3000/api`,
});

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery,
  tagTypes: ['Boards'],
  endpoints: () => ({}),
});
