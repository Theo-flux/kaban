export type TCollections = {
  name: string;
  collections: Array<string>;
};

export type TCreateBoard = {
  name: string;
  message: string;
};

export type TDeleteBoard = {
  status: boolean;
  message: string | object;
};

export type TBoard = {
  name: string;
};

export type TDoc = {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: Array<{
    _id: string;
    title: string;
    isCompleted: boolean;
  }>;
  __v: number;
};

export type TDocs = {
  docs: Array<TDoc>;
};

export type TTasks = TDocs & {
  name: string;
};
