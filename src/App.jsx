import { useEffect, useState } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";

function App() {
  const [showscrollBtn, setshowscrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setshowscrollBtn(true);
      } else {
        setshowscrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up">
        <button
          style={{ opacity: showscrollBtn ? 1 : 0, transition: "1s" }}
          className="Btn"
        >
          <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
          <p className="text">Back to Top</p>
        </button>
      </a>
    </div>
  );
}

export default App;
