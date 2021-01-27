import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState, filteredTodoListState } from "../../store";
import TodoItemCreator from "../TodoItemCreator";
import TodoItem from "../TodoItem";
import TodoListStats from "../TodoListStats";
import TodoListFilters from "../TodoListFilters";

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h1>to do list</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
