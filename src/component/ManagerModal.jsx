import React, { useState, useEffect } from "react";

const ManagerModal = (props) => {
  // フォームコンテンツ
  const initForm = {
    title: "",
    due_date: "",
  };
  const [form, setForm] = useState(initForm);

  useEffect(() => {
    const { id, title, due_date } = props.targetTask;
    if (id !== null) {
      setForm({
        title: title,
        due_date: due_date,
      });
    } else {
      setForm(initForm);
    }
  }, [props.targetTask]);

  // handleInputChange:フォーム変更時データ保持
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // handleClose
  const handleClose = () => {
    setForm(initForm);
    props.setTargetTask({
      id: null,
      title: "",
      due_date: "",
    });
  };

  // handleSubmit:フォームの内容をtaskに保持
  const handleSubmit = () => {
    const { title, due_date } = form;

    if (title === "") {
      return alert("タイトルを入力してください");
    } else if (due_date === "") {
      return alert("期限を入力してください");
    }
    if (props.targetTask.task_id === null) {
      props.addTask(title, due_date);
    } else {
      props.editTask(props.targetTask.task_id, title, due_date);
    }
    // modal閉じる
    handleClose();
  };

  // handleDelete:フォームの内容を削除
  const handleDelete = () => {
    props.deleteTask(props.targetTask.task_id);
    // modal閉じる
    handleClose();
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
            タスクの{props.targetTask.id === null ? "追加" : "編集"}
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
          {props.targetTask.id === null ? (
            <>
              <form method="dialog">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
                  追加
                </button>
              </form>
            </>
          ) : (
            <div className="flex">
              <form method="dialog">
                <button
                  type=""
                  onClick={handleDelete}
                  className="btn btn-neutral"
                >
                  削除
                </button>
              </form>
              <form method="dialog">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary mx-5"
                >
                  編集
                </button>
              </form>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ManagerModal;
