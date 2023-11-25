import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [lgFlag, setLgFlag] = useState(true);
  const lgTrue = () => {
    setLgFlag(true);
    document.getElementById("my_modal_1").showModal();
  };
  const lgFalse = () => {
    setLgFlag(false);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <>
      <div className="m-40 gap-10 flex flex-col">
        <button className="btn btn-secondary" onClick={() => lgTrue()}>
          ログイン
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <LoginContent lgFlag={lgFlag} />
          </div>
        </dialog>

        <button className="btn" onClick={() => lgFalse()}>
          登録
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <LoginContent lgFlag={lgFlag} />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;

const LoginContent = (props) => {
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed tabs-lg">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="M"
        />
        <div role="tabpanel" className="tab-content p-5">
          <div className="join gap-5 flex flex-col">
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
          <div className="py-10">
            {props.lgFlag ? (
              <Link to="/Manager">
                <button className="btn btn-secondary">ログイン（M）</button>
              </Link>
            ) : (
              <form method="dialog">
                <button className="btn btn-neutral">登録</button>
              </form>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="U"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="join gap-5 flex flex-col">
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
          <div className="py-10">
            {props.lgFlag ? (
              <Link to="/User">
                <button className="btn btn-secondary">ログイン（U）</button>
              </Link>
            ) : (
              <form method="dialog">
                <button className="btn btn-neutral">登録</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
