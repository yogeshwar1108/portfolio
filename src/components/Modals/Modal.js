import React, { useRef } from "react";
import "./Modal.css";
import emailjs from "@emailjs/browser";

function Modal({ onClose }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( "service_6vkbsnh", "template_kmxxdap", form.current,"tOJyqHV_JijK17afN")
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email sent sucessfully !! ')
        },(error) => {
          console.log(error.text);
        });
  };
  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <>
      <div className="center-container">
        <form className="center-form" ref={form} onSubmit={sendEmail}>
          <h1>Get in Touch</h1>
          {/* ... Rest of your modal content ... */}
          <div className="Fitem">
            <input placeholder="Enter Your Name" required type="text" name='from_name' />
          </div>
          <div className="Fitem">
            <input required  placeholder=" Email address" type="email" name='from_email' />
            <input required  placeholder="Mobile Number" type="tel" name='form_number'/>
          </div>
          <div className="Fitem">
            <textarea required  name='message' placeholder="Drop a message" type="text"></textarea>
          </div>
          <button className="btn3" type="submit" value='send'>Submit</button>
          <button className="close" onClick={handleClose}>
            close
          </button>
        </form>
      </div>
    </>
  );
}

export default Modal;
