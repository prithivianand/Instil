import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Plans.css";

const CombinedComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9y07jnp",
        "template_e9hdj8c",
        form.current,
        "5nbnZAZYrR9Hl-FVy"
      )
      .then(
        () => {
          alert("Form submitted successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send form. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* Plans Section */}
      <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{ gap: "2rem" }}>
          <span className="stroke-text">Enquire Now</span>
          <span>We'll Contact You</span>
          <span className="stroke-text">Shortly</span>
        </div>
      </div>

      {/* Contact Form Section */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>NAME:</label>
        <input type="text" name="name" required />

        <label>MOBILE NO:</label>
        <input type="tel" name="mobile" required />

        <label>SUBJECTS:</label>
        <input type="text" name="subjects" required />

        <label>COLLEGE NAME:</label>
        <input type="text" name="college" required />

        <button
          type="submit"
          style={{ backgroundColor: "#016795", color: "white" }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CombinedComponent;
