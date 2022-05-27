import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import "./ContactPage.css";
export function ContactPage() {
  return (
    <div className="container-page-contact">
      <div className="form-container">
        <ContactForm />
      </div>
      <div className="container-page-2">
        <div className="align-text">
          <small>Contact</small>
        </div>
      </div>
    </div>
  );
}
