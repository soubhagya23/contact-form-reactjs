import React, { useState } from "react";
import "./contact.css";
import { db } from "./Firebase";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Hurray! It's Works😍. Your Message Has Been Submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h3>Get in touch</h3>
      <div class="form-group">
        <input
          type="text"
          value={name}
          class="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          id="contact-name"
          required
        />

        <input
          type="email"
          class="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          id="contact-email"
          required
        />

        <textarea
          class="form-control"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          id="contact-message"
          rows="1"
          required
        ></textarea>
      </div>

      <button
        id="contact-send"
        class="btn btn-primary btn-lg btn-block"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
export default Contact;
