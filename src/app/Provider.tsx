import { Provider } from 'react-redux';
import { store } from './store';
import { boardActions } from './features/board/boardSlice';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function Providers({ children }: Props) {
  const { SETACTIVEBOARD } = boardActions;
  const getActiveboardFromSessionStorage = () => {
    try {
      const persistedState = sessionStorage.getItem('activeboard');
      if (persistedState) return JSON.parse(persistedState);
    } catch (e) {
      console.log(e);
    }
  };

  const board = getActiveboardFromSessionStorage();
  if (board) {
    store.dispatch(SETACTIVEBOARD(board));
  }
  return <Provider store={store}>{children}</Provider>;
}
