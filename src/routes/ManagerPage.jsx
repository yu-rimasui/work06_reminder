import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import ManagerTodo from "../component/ManagerTodo";
import ManagerModal from "../component/ManagerModal";
// firebaseから
import {
  addTaskFb,
  editTaskFb,
  deleteTaskFb,
  getTasksFb,
} from "../library/FirebaseAccess";

const ManagerPage = () => {
  // teamId(とりあえず定数)
  const teamId = 1;
  // タスクデータ
  const [tasks, setTasks] = useState([]);
  // 一次的に保持したい１つの taskデータ
  const [targetTask, setTargetTask] = useState({
    id: null,
    title: "",
    due_date: "",
  });

  // フェッチ
  let isFirst = false;
  useEffect(() => {
    fetchTask();
    isFirst = true;
  }, []);

  useEffect(() => {
    if (!isFirst && targetTask.id !== null) {
      () => document.getElementById("my_modal_3").showModal();
    }
  }, [targetTask]);

  const fetchTask = () => {
    const getData = getTasksFb(teamId);
    setTasks(getData);
  };

  // タスク追加
  const addTask = (title, due_date) => {
    const newTask = {
      title: title,
      due_date: due_date,
    };
    addTaskFb(teamId, newTask);
  };

  // タスク編集
  const editTask = (id, title, due_date) => {
    const newTask = {
      title: title,
      due_date: due_date,
    };
    editTaskFb(id, newTask);
  };

  // タスク削除
  const deleteTask = (id) => {
    deleteTaskFb(id);
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
