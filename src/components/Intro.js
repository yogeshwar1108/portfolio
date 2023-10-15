import React, { useState } from "react";
import dp from "../assets/dp.png";
import hire from "../assets/handshake.svg";
import "./Intro.css";
import { Link } from "react-scroll";
import Modal from "./Modals/Modal";

function Intro() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="intro container d-flex">
        <section className="introContent">
          <h1 className="font-weight-bold">
            <div>
              <spam>
                <h4>Hello All !!</h4>
              </spam>
              <h1>
                I am <span className="name">Yogi</span>
              </h1>
              <div>
                & I 'am a <span className="webDev">web Developer</span>
              </div>
            </div>
          </h1>
          <Link className="introbtn">
            <img src={hire} alt="icon" />
            <button className="btn2" onClick={openModalHandler}>
              Hire me
            </button>
          </Link>
        </section>
        <div className="imageSection">
          <img src={dp} alt="profileImg" className="bg" />
        </div>
      </div>
      {openModal && <Modal onClose={closeModal} />}
    </>
  );
}

export default Intro;
