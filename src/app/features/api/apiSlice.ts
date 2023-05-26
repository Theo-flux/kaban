import { kanbanApi } from '@/app/services/kanbanApi';
import { TCollections, TCreateBoard, TDeleteBoard, TBoard } from './types';

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
    deleteBoard: builder.mutation<TDeleteBoard, TBoard>({
      query: board => `/boards/${board.name}/deleteboard`,
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const {
  useGetAllBoardsQuery,
  useCreateNewBoardMutation,
  useDeleteBoardMutation,
} = kanbanApiSlice;
