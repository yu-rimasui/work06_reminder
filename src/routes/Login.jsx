import React, { useEffect, useState } from "react";

const Login = () => {
  return (
    <>
      <div className="mx-40 my-36 gap-8 flex flex-col">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          ログイン
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div>
              <div className="join">
                <input
                  className="join-item btn"
                  type="radio"
                  name="options"
                  aria-label="Radio 1"
                />
                <input
                  className="join-item btn"
                  type="radio"
                  name="options"
                  aria-label="Radio 2"
                />
                <input
                  className="join-item btn"
                  type="radio"
                  name="options"
                  aria-label="Radio 3"
                />
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn m-auto">とじる</button>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          登録
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div>フォームをつくるここに</div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn m-auto">とじる</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
