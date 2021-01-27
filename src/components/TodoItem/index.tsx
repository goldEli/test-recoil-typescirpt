import React from "react";
import { useRecoilState } from "recoil";
import { todoListState, ITodoListState } from "../../store";

function replaceItemAtIndex(
  arr: ITodoListState[],
  index: number,
  newValue: ITodoListState
): ITodoListState[] {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(
  arr: ITodoListState[],
  index: number
): ITodoListState[] {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({ item }: { item: ITodoListState }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (event: any) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.taget.value as string
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoItem;
