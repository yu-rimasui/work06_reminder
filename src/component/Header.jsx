import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Header = () => {
  const [theme, useTheme] = useState("どんどこカンパニー");
  const [name, useName] = useState("ゆーり");
  const today = new Date();
  const thisDay = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;

  return (
    <>
      <header>
        <div className="flex justify-around">
          <p>{theme}</p>
          <p>
            <Link to="/Manager">
              <button>ボタン</button>
            </Link>
          </p>
        </div>
        <div className="flex justify-around">
          <p>{name}</p>
          <p>{thisDay}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
