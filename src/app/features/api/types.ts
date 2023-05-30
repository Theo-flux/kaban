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

export type TTasks = {
  name: string;
  docs: Array<{
    title: string;
    description: string;
    status: string;
    subtasks: Array<{
      title: string;
      isCompleted: boolean;
    }>;
  }>;
};
