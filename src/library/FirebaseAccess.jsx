import db from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import "firebase/firestore";

/*
 * リマインダー
 **/
// 更新（追加, 編集）
export const updateTodo = (reminder_id, updateTodoInfo) => {
  try {
    const todoRef = doc(collection(db, "reminder"), reminder_id);
    updateDoc(todoRef, updateTodoInfo);
  } catch (err) {
    console.log(err);
  }
};

// 更新（削除）
export const deleteTodo = (reminder_id, deleteTodoInfo) => {
  try {
    const todoRef = doc(collection(db, "reminder"), reminder_id);
    updateDoc(todoRef, deleteTodoInfo);
  } catch (err) {
    console.log(err);
  }
};
