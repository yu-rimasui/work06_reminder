import React, { useState } from "react";

const ManagerTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const id = 1;
  const title = "VSマルフォイ";
  const due_date = "2023.11.26(焦りマシマシ)";

  return (
    <>
      <div className="flex flex-col">
        <TodoItem id={id} title={title} due_date={due_date} />
      </div>
    </>
  );
};

export default ManagerTodo;

const TodoItem = (props) => {
  const { id, title, due_date } = props;
  return (
    <>
      <button className="my-14 mx-10 w-9/12 text-lg flex justify-around btn">
        <div>{title}</div>
        <div>{due_date}</div>
      </button>
    </>
  );
};
