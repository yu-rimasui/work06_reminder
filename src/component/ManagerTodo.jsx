import React, { useEffect, useState } from "react";

const ManagerTodo = (props) => {
  const { tasks, setTargetTask } = props;

  return (
    <div className="flex justify-center">
      <div className="my-14 w-9/12 flex flex-col">
        {tasks.map((task) => {
          const { id, title, due_date } = task;

          return (
            <div>
              <button
                key={id}
                className="my-3 text-lg flex justify-around btn btn-block"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                  setTargetTask(task);
                }}
              >
                <div>{title}</div>
                <div>{due_date}</div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ManagerTodo;
