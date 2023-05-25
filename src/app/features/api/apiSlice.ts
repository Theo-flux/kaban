import { kanbanApi } from '@/app/services/kanbanApi';

type TCollections = {
  name: string;
  collections: Array<string>;
};

type TCreateBoard = {
  name: string;
  message: string;
};
type TBoard = {
  name: string;
};

export const kanbanApiSlice = kanbanApi.injectEndpoints({
  endpoints: builder => ({
    getAllBoards: builder.query<TCollections, void>({
      query: () => '/boards',
      providesTags: ['Boards'],
    }),
    createNewBoard: builder.mutation<TCreateBoard, TBoard>({
      query: board => `/boards/${board}/createboard`,
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const { useGetAllBoardsQuery, useCreateNewBoardMutation } =
  kanbanApiSlice;
