import { useSearchParams } from "react-router-dom";
import db from "../../firebase";
import "firebase/firestore";
import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";

/*
 * タスク
 **/
// タスク追加(ID自動生成)
export const addTaskFb = async (newTask) => {
  try {
    const taskRef = collection(db, "tasks");
    console.log(taskRef);
    await addDoc(taskRef, newTask);
  } catch (err) {
    console.log("addTaskのエラー");
  }
};

// タスク更新(編集)
export const editTaskFb = async (taskId, newTask) => {
  const taskRef = doc(collection(db, "tasks"), String(taskId));
  updateDoc(taskRef, newTask);
  console.log(newTask);
};

// タスク削除
export const deleteTaskFb = async (taskId) => {
  const taskRef = doc(collection(db, "tasks"), String(taskId));
  deleteDoc(taskRef);
};

// 複数タスク取得
export const getTasksFb = async (teamId, setTasks) => {
  try {
    const q = query(
      collection(db, "tasks"),
      where("team_id", "==", teamId),
      orderBy("due_date", "asc")
    );
    getDocs(q).then((x) => {
      setTasks(
        x.docs.map((doc) => {
          let box = {
            task_id: doc.id,
            team_id: doc.data().team_id,
            title: doc.data().title,
            due_date: doc.data().due_date,
          };
          return box;
        })
      );
    });
  } catch (err) {
    console.log(err);
    console.log(`Error: ${JSON.stringify(err)}`);
  }
};
