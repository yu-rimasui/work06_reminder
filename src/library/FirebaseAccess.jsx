import db from "../../firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

/*
 * リマインダー
 **/
// document追加(ID自動生成)
export const addTask = async (teamId, newTask) => {
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

// document更新(編集)
export const editTask = async (taskId, newTask) => {
  const taskRef = db.collection("tasks").doc(taskId);
  await taskRef.update({
    title: newTask.title,
    due_date: newTask.due_date,
  });
};

// document削除
export const deleteTask = async (taskId) => {
  const taskRef = db.collection("tasks").doc(taskId);
  await taskRef.delete();
};

// 複数document取得
export const getTasks = async (teamId) => {
  try {
    const querySnapShot = await db
      .collection("tasks")
      .where("team_id", "==", teamId)
      .orderBy("due_date", "asc")
      .get();
    querySnapShot.forEach((taskDoc) => {
      console.log(`${taskDoc.id} => ${JSON.stringify(taskDoc.data())}`);
    });

    await db.app.delete();
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }
};
