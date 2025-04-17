import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // State to store form values & success message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Function to update state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Check if fields are empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSuccessMessage("Please fill all fields before submitting.");
      return;
    }

    // Show success message
    setSuccessMessage("✅ Message sent successfully!");

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Remove message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <section id="contact" className="contact_container">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>Let's collaborate and create something amazing together.</p>

            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Nikhil Kumar</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Sambhal, Uttar Pradesh</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">nikhil.saini1012002@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="column right">
            <div className="text">
              <strong>Message Me</strong>{" "}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send Message</button>
              </div>
            </form>

            {/* Success Message */}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
