'use-client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery,
  endpoints: () => ({}),
});
