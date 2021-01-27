import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../store";
import TodoItemCreator from "../TodoItemCreator";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>to do list</h1>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
