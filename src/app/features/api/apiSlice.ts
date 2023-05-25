import { kanbanApi } from '@/app/services/kanbanApi';
import { TCollections, TCreateBoard, TBoard } from './types';

export const kanbanApiSlice = kanbanApi.injectEndpoints({
  endpoints: builder => ({
    getAllBoards: builder.query<TCollections, void>({
      query: () => '/boards',
      providesTags: ['Boards'],
    }),
    createNewBoard: builder.mutation<TCreateBoard, TBoard>({
      query: board => `/boards/${board.name}/createboard`,
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const { useGetAllBoardsQuery, useCreateNewBoardMutation } =
  kanbanApiSlice;
