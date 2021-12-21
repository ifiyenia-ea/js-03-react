import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className="menu-btn btn" onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu className="btn-icon" />
      </button>

      <Navbar show={showNav} />

      <div className="main">
        <h1 className="main__info-title">Aysha Macleod</h1>
        <h2 className="main__info-text">photographer</h2>
        <div>
          <button
            className="btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            SUBSCRIBE FOR NEWS
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
}

export default App;
