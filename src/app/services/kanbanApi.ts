'use-client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : process.env.NEXT_PUBLIC_API_URL,
});

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery,
  tagTypes: ['Boards'],
  endpoints: () => ({}),
});
