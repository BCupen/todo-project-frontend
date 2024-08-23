import { useState } from "react";
import { Checkbox } from "./Checkbox";

export const TodoInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoStatus, setTodoStatus] = useState(false);

  const handleCheck = (value: boolean) => {
    setTodoStatus(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="max-w-lg w-full rounded-[4px] flex items-center gap-3 p-4 bg-light-gray">
      <Checkbox checked={todoStatus} onChange={handleCheck}/>
      <input
        type="text"
        className="bg-transparent focus:outline-none placeholder:text-light-blue-300 text-lg"
        placeholder="Create a new todo..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
    </form>
  );
};
