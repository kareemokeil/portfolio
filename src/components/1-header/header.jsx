import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("currentmode") || "dark");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

    localStorage.setItem("currentmode", theme);
  }, [theme]);

  return (
    <header className="flex">

      <button
        className="menu icon-menu flex"
        aria-label="Open Menu"
        onClick={() => setShowModal(true)}
      ></button>

      <div />


      <nav>
        <ul className="flex">
          <li><a href="#">About</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Speaking</a></li>
        </ul>
      </nav>
  
      <button
   
        onClick={() => {

          setTheme(theme === "dark" ? "light" : "dark");
        }}
        aria-label="Toggle Theme"
      >
        { theme === "dark" ? (
        <span className="icon-moon-o flex"></span>
) : (
        <span className="icon-sun flex"></span>
        )} 
      </button>


      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>

              <button
                className="icon-close"
                aria-label="Close Menu"
                onClick={() => setShowModal(false)}
              ></button>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Speaking</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
