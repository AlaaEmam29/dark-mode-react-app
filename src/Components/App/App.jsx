import data from "../data/data.js";
import moment from "moment";
import React, { useEffect, useState } from "react";
const getLocalData = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const App = () => {
  const [theme, setTheme] = useState(getLocalData());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme",theme);
  }, [theme]);

  return (
    <>
      <nav className="container  m-auto text-center align-items-center justify-content-center mb-0 p-4 d-flex">
        <h3 className="mb-0">Dark Mode</h3>
        <button className=" btn-color mx-3" onClick={toggleTheme}>
          Toggle
        </button>
      </nav>
      <main className="container w-75 m-auto py-5">
        {data.map((item, index) => {
          return (
            <article key={index} className="mb-3">
              <h2 className="title-color">{item.title}</h2>
              <div className="info ">
                <span>{moment(item.date).format("MMMM dddd Do, YYYY ")}</span>
                <span>{item.length} min read</span>
              </div>
              <p>{item.snippet}</p>
            </article>
          );
        })}
      </main>
    </>
  );
};
export default App;
