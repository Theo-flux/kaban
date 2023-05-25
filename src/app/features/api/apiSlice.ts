import { kanbanApi } from '@/app/services/kanbanApi';

type TCollections = {
  name: string;
  collections: Array<string>;
};

export const kanbanApiSlice = kanbanApi.injectEndpoints({
  endpoints: builder => ({
    getAllBoards: builder.query<TCollections, void>({
      query: () => '/boards',
    }),
  }),
});

export const { useGetAllBoardsQuery } = kanbanApiSlice;
