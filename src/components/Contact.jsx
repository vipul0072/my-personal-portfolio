import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhone, FaInstagram } from "react-icons/fa";
import "../style/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vwzv0sr",
      "template_rcnotdx",
      form.current,
      "0vbavm_I1IrfmzSgM"
    ).then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("Failed to send message. Please try again.");
      console.error(error.text);
    });
  };

  return (
    <footer className="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      <div className="socials">
        <a href="https://github.com/vipul0072" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/vipul-rawat-82b3b9255" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://instagram.com/vipul_rawat_01" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="tel:+916396702962" target="_blank" rel="noopener noreferrer" aria-label="Phone"><FaPhone /></a>
      </div>
    </footer>
  );
}
