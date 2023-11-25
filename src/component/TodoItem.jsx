import React from "react";

const TodoItem = (props) => {
  const { id, title, due_date, editTodo } = props;
  return (
    <>
      <button
        key={id}
        className="my-14 mx-10 w-9/12 text-lg flex justify-around btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div>VSマルフォイ</div>
        <div>12/3(Sun)</div>
      </button>
    </>
  );
};

export default TodoItem;
