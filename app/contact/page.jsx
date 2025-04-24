"use client";

import { useState } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactSelector from "@/components/contact/ContactSelector";
import ContactForm from "@/components/contact/ContactForm";
import ContactConfirmation from "@/components/contact/ContactConfirmation";

export default function ContactUs() {
  const [role, setRole] = useState("Candidate");
  const [lookingFor, setLookingFor] = useState("Select one");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      role,
      lookingFor,
      ...formData,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
        setRole("Candidate");
        setLookingFor("Select one");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24" />
      <ContactHero />
      <div className="bg-opacity-80 p-8 flex-col  rounded-lg shadow-lg">
        {isSubmitted ? (
          <ContactConfirmation onReset={() => setIsSubmitted(false)} />
        ) : lookingFor === "Select one" ? (
          <div className="items-center justify-center flex">
            <ContactSelector
              role={role}
              setRole={setRole}
              lookingFor={lookingFor}
              setLookingFor={setLookingFor}
            />
          </div>
        ) : (
          <div className="items-center justify-center flex w-full">
            <ContactForm
              role={role}
              lookingFor={lookingFor}
              formData={formData}
              onBack={() => setLookingFor("Select one")}
              onChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
