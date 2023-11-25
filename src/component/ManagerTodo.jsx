import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const ManagerTodo = () => {
  // タスクデータ
  const [tasks, setTasks] = useState([]);
  const initTask = {
    id: null,
    title: "",
    due_date: "",
  };
  const [task, setTask] = useState(initTask);

  // // フェッチ
  // const API_URL = "http://localhost:3000/";
  // let isFirst = false;
  // useEffect(() => {
  //   fetchEvent();
  //   isFirst = true;
  // }, []);

  // useEffect(() => {
  //   if (!isFirst && task.id !== null) {
  //     setShow(true);
  //   }
  // }, [task]);

  // const fetchEvent = () => {
  //   fetch(API_URL)
  //     .then((responseData) => {
  //       return responseData.json();
  //     })
  //     .then((result) => {
  //       setTasks(result);
  //     });
  // };

  // タスク追加
  const addTask = (title, due_date) => {
    const addDate = { title, due_date };
    fetch(API_URL, {
      body: JSON.stringify(addDate),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(fetchEvent);
  };

  // タスク削除
  const deleteTask = (id) => {
    const taskURL = API_URL + id;
    fetch(taskURL, {
      method: "DELETE",
    }).then(fetchEvent);
  };

  // タスク編集
  const editTask = (id, title, due_date) => {
    const taskURL = API_URL + id;
    const editData = { id, title, due_date };
    fetch(taskURL, {
      body: JSON.stringify(editData),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(fetchEvent);
  };

  return (
    <>
      <TodoItem task={task} />
      <TaskModal
        task={task}
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default ManagerTodo;

const TaskModal = (props) => {
  // フォームコンテンツ
  const initForm = {
    title: "",
    due_date: "",
  };
  const [form, setForm] = useState(initForm);

  useEffect(() => {
    const { id, title, due_date } = props;
    if (id !== null) {
      setForm({
        title: title,
        due_date: due_date,
      });
    } else {
      setForm(initData);
    }
  }, [props.task]);

  // handleInputChange:フォーム変更時データ保持
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // handleSubmit:フォームの内容をtaskに保持
  const handleSubmit = () => {
    const { title, due_date } = form;

    if (title === "") {
      return alert("タイトルを入力してください");
    }
    if (props.task.id === null) {
      props.addTask(title, due_date);
    } else {
      props.editTask(props.task.id, title, due_date);
    }
    // modal閉じる
  };

  // handleDelete:フォームの内容を削除
  const handleDelete = () => {
    props.deleteTask(props.task.id);
    // modal閉じる
  };

  return (
    <>
      <button
        className="btn btn-lg btn-circle btn-primary z-10 fixed bottom-20 right-16"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg flex justify-center">
            {props.task.id === null ? "追加" : "編集"}
          </h3>
          <div className="join my-10 gap-10 flex flex-col">
            <input
              type="text"
              name="title"
              placeholder="タスク"
              defaultValue={form.title}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="due_date"
              defaultValue={form.due_date}
              onChange={handleInputChange}
            />
          </div>
          {props.task.id === null ? (
            <>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                追加
              </button>
            </>
          ) : (
            <>
              <button
                type=""
                onClick={handleDelete}
                className="btn btn-neutral"
              >
                削除
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary mx-5"
              >
                編集
              </button>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
