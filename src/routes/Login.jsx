import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <button
          className="btn"
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
            <LoginContent />
          </div>
        </dialog>

        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          登録
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <LoginContent />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;

const LoginContent = () => {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="管理者"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="team"
            />
            <input
              className="input input-bordered join-item"
              placeholder="name"
            />
            <input
              className="input input-bordered join-item"
              placeholder="password"
            />
          </div>
          <div>
            <Link to="/ManagerPage">
              <button>ログイン（M）</button>
            </Link>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="ユーザー"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="team"
            />
            <input
              className="input input-bordered join-item"
              placeholder="name"
            />
            <input
              className="input input-bordered join-item"
              placeholder="email"
            />
            <input
              className="input input-bordered join-item"
              placeholder="new password"
            />
          </div>
          <Link to="/UserPage">
            <div>ログイン（U）</div>
          </Link>
        </div>
      </div>
    </>
  );
};
