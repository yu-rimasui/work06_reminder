import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [team, useTeam] = useState("どんどこカンパニー");
  const [name, useName] = useState("ゆーり");
  const today = new Date();
  const thisDay = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;

  return (
    <>
      <header>
        {/* ヘッダー */}
        <div className="navbar bg-base-100 shadow">
          <div className="flex-1">
            <h3 className="px-10 text-xl">{team}</h3>
          </div>
          <div className="flex-none">
            <ul className="px-10 gap-5 flex items-center">
              <li>
                <p>{name}</p>
              </li>
              <li>
                <Link to="/">
                  <button className="btn btn-neutral">ログアウト</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* 日付 */}
        <div className="mx-16 flex justify-end">{thisDay}</div>
      </header>
    </>
  );
};

export default Header;
