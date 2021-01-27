import { atom } from "recoil";

export interface ITodoListState {
  isComplete: boolean;
  id: number;
  text: string;
}

const initTodoListState: ITodoListState[] = [];

export const todoListState = atom({
  key: "todoListState",
  default: initTodoListState
});
