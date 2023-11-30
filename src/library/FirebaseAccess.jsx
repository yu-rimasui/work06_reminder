import { useSearchParams } from "react-router-dom";
import db from "../../firebase";
import { useState } from "react";

/*
 * タスク
 **/
// タスク追加(ID自動生成)
export const addTaskFb = async (teamId, newTask) => {
  try {
    const taskRef = await db.collection("tasks").add({
      team_id: teamId,
      title: newTask.title,
      due_date: newTask.due_date,
    });

    const taskDoc = await taskRef.get();
    console.log(taskDoc.data());
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }
};

// タスク更新(編集)
export const editTaskFb = async (taskId, newTask) => {
  const taskRef = db.collection("tasks").doc(taskId);
  await taskRef.update({
    title: newTask.title,
    due_date: newTask.due_date,
  });
};

// タスク削除
export const deleteTaskFb = async (taskId) => {
  const taskRef = db.collection("tasks").doc(taskId);
  await taskRef.delete();
};

// 複数タスク取得
export const getTasksFb = async (teamId) => {
  let box = [];
  try {
    const querySnapShot = await db
      .collection("tasks")
      .where("team_id", "==", teamId)
      .orderBy("due_date", "asc")
      .get();
    querySnapShot.forEach((taskDoc) => {
      console.log(`${taskDoc.id} => ${JSON.stringify(taskDoc.data())}`);
      box.push(...items, {
        id: taskDoc.id,
        team_id: teamId,
        title: taskDoc.date().title,
        due_date: taskDoc.date().due_date,
      });
    });
    return box;
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }
};
