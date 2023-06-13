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
  cols?: Array<string>;
};

export type TSubtasks = {
  title: string;
  isCompleted: boolean;
};

export type TTask = {
  title: string;
  description: string;
  status: string;
  subtasks: Array<TSubtasks>;
  index: number;
};

export type TColumnTask = {
  name: string;
  tasks: Array<TTask>;
};

export type TColumnDatum = {
  _id: string;
  name: string;
  tasks: Array<{
    _id: string;
    title: string;
    description: string;
    status: string;
    index: number;
    subtasks: Array<{
      _id: string;
      title: string;
      isCompleted: boolean;
    }>;
  }>;
  __v: number;
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
  index: number;
};

export type TDocs = {
  docs: Array<TDoc>;
};

export type TTasksFromCollection = {
  name: string;
  docs: Array<{
    _id: string;
    name: string;
    tasks: Array<TDoc>;
    __v: number;
  }>;
};
