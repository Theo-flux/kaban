'use-client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `https://thekanban.vercel.app/api`,
});

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery,
  endpoints: () => ({}),
});
