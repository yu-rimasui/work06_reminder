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
    task_id: null,
    title: "",
    due_date: "",
  });
  // レンダリング
  const [flg, setFlg] = useState(false);

  useEffect(() => {
    fetchTask();
  }, [flg]);

  const fetchTask = async () => {
    await getTasksFb(teamId, setTasks);
  };

  // タスク追加
  const addTask = (title, due_date) => {
    const newTask = {
      team_id: teamId,
      title: title,
      due_date: due_date,
    };
    addTaskFb(newTask);
    setFlg(!flg);
  };

  // タスク編集
  const editTask = (task_id, title, due_date) => {
    const newTask = {
      title: title,
      due_date: due_date,
    };
    editTaskFb(task_id, newTask);
    setFlg(!flg);
  };

  // タスク削除
  const deleteTask = (task_id) => {
    deleteTaskFb(task_id);
    setFlg(!flg);
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
