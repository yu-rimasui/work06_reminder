import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import ManagerTodo from "../component/ManagerTodo";
import ManagerModal from "../component/ManagerModal";
// firebaseから
import {
  addTask,
  editTask,
  deleteTask,
  getTasks,
} from "../library/FirebaseAccess";

const ManagerPage = () => {
  // タスクデータ
  const [tasks, setTasks] = useState([]);
  const [targetTask, setTargetTask] = useState({
    id: null,
    title: "",
    due_date: "",
  });

  // フェッチ
  let isFirst = false;
  useEffect(() => {
    fetchEvent();
    isFirst = true;
  }, []);

  useEffect(() => {
    if (!isFirst && targetTask.id !== null) {
      () => document.getElementById("my_modal_3").showModal();
    }
  }, [targetTask]);

  const fetchEvent = () => {
    fetch(API_URL)
      .then((responseData) => {
        return responseData.json();
      })
      .then((result) => {
        setTasks(result);
      });
  };

  // タスク追加
  const addTask = (title, due_date) => {
    // const addDate = { title, due_date };
    // fetch(API_URL, {
    //   body: JSON.stringify(addDate),
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(fetchEvent);
    newId = Math.max(...tasks.map((task) => task.id)) + 1;
    setTargetTask({
      id: newId,
      title: title,
      due_date: due_date,
    });
    updateTodo();
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
      <Header />
      <ManagerTodo tasks={tasks} setTargetTask={setTargetTask} />
      <ManagerModal
        addTask={addTask}
        deleteTask={deleteTask}
        targetTask={targetTask}
        setTargetTask={setTargetTask}
        editTask={editTask}
      />
    </>
  );
};

export default ManagerPage;
