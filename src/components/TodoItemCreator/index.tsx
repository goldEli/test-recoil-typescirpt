import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../store";

// utility for creating unique Id
let id = 0;
function getId(): number {
  return id++;
}
export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = (event: any) => {
    setInputValue(event.target?.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
