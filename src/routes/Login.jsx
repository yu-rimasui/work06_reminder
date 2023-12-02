import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // // 仮ログインページ
  // return (
  //   <div className="m-40 gap-10 flex flex-col justify-center">
  //     <h1 className="text-2xl">^-^</h1>
  //     <Link to="/Manager">
  //       <button className="btn btn-lg btn-secondary">管理者ログイン</button>
  //     </Link>{" "}
  //     <Link to="/User">
  //       <button className="btn btn-lg">ユーザーログイン</button>
  //     </Link>
  //   </div>
  // );

  // ログインの状態を管理
  const [isLogin, setIsLogin] = useState(false);
  // ログインフォーム
  const initLgform = {
    team: "",
    user_name: "",
    password: "",
    category: "",
  };
  const [lgform, setLgform] = useState([initLgform]);

  //

  // handleSubmit:フォームの内容をtaskに保持
  const handleSubmit = () => {
    const { team, user_name, password, category } = lgform;

    if (team === "" || team === "未選択") {
      return alert("チームを選択してください");
    } else if (user_name === "") {
      return alert("名前を入力してください");
    } else if (password === "") {
      return alert("パスワードを入力してください");
    } else if (category === "") {
      return alert("管理者かユーザーか選択してください");
    }
    // if (props.targetTask.id === null) {
    //   props.addTask(title, due_date);
    // } else {
    //   props.editTask(props.targetTask.id, title, due_date);
    // }
    // modal閉じる
    handleClose();
  };

  // チームオプション
  const optionTeam = () => {
    const teams = ["A", "B", "C"];
    const option = teams.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
    return option;
  };

  return (
    <>
      <div className="m-40 gap-10 flex flex-col">
        {/* ログインボタン */}
        <button
          className="btn btn-secondary"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          ログイン
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="flex justify-center text-2xl">ログイン</h1>
            <div className="join p-5 gap-5 flex flex-col">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  未選択
                </option>
                {optionTeam()}
              </select>
              <input
                className="input input-bordered join-item"
                placeholder="name"
                defaultValue={lgform.name}
              />
              <input
                className="input input-bordered join-item"
                placeholder="password"
                defaultValue={lgform.password}
              />
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  ユーザー
                </option>
                <option>管理者</option>
              </select>

              <div role="tablist" className="tabs tabs-boxed tabs-lg">
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="管理者"
                />
                <div role="tabpanel" className="tab-content p-5">
                  <Link to="/Manager">
                    <button
                      className="btn btn-secondary"
                      onChange={handleSubmit}
                    >
                      管理者ログイン
                    </button>
                  </Link>
                </div>
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="ユーザー"
                  defaultChecked
                />
                <div role="tabpanel" className="tab-content p-5">
                  <Link to="/User">
                    <button
                      className="btn btn-secondary"
                      onChange={handleSubmit}
                    >
                      ユーザーログイン
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </dialog>

        {/* 新規登録ボタン */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          新規登録
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="flex justify-center text-2xl">新規登録</h1>
            <div className="join p-5 gap-5 flex flex-col">
              <input
                className="input input-bordered join-item"
                placeholder="team"
                defaultValue={lgform.team}
              />
              <input
                className="input input-bordered join-item"
                placeholder="name"
                defaultValue={lgform.name}
              />
              <input
                className="input input-bordered join-item"
                placeholder="new password"
                defaultValue={lgform.password}
              />

              <div role="tablist" className="tabs tabs-boxed tabs-lg">
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="管理者"
                />
                <div role="tabpanel" className="tab-content p-5">
                  <Link to="/Manager">
                    <button className="btn btn-secondary">
                      管理者ログイン
                    </button>
                  </Link>
                </div>
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="ユーザー"
                  defaultChecked
                />
                <div role="tabpanel" className="tab-content p-5">
                  <Link to="/User">
                    <button className="btn btn-secondary">
                      ユーザーログイン
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
