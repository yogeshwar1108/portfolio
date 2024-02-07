import React from "react";
import "./Contacts.css"; // You can import your own CSS file here
import { DiGithubFull } from "react-icons/di";
import { GrLinkedin } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";

function Contacts() {
  const handleInstagramClick = () => {
    alert("Instagram link isTemporarly disabled for now.");
  };

  return (
    <section id="contacts">
      <main className="Content">
        <h1 className="h1">contact me 👇👇</h1>
        <div className="a-tags">
          <a href="https://github.com/yogeshwar1108">
            <DiGithubFull className="icon " />
          </a>

          <a href="https://www.linkedin.com/in/iyogeshwar/">
            <GrLinkedin className="icon " />
          </a>

          <a href="/" onClick={handleInstagramClick}>
            <FiInstagram className="icon " />
          </a>
        </div>
      </main>
    </section>
  );
}

export default Contacts;
