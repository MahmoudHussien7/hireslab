"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContact, resetStatus } from "@/redux/slices/contactSlice"; // update the import based on your structure
import ContactHero from "@/components/contact/ContactHero";
import ContactSelector from "@/components/contact/ContactSelector";
import ContactForm from "@/components/contact/ContactForm";
import ContactConfirmation from "@/components/contact/ContactConfirmation";

export default function ContactUs() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.contact);

  const [role, setRole] = useState("Candidate");
  const [lookingFor, setLookingFor] = useState("Select one");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // inside useEffect reset:
  useEffect(() => {
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setRole("Candidate");
      setLookingFor("Select one");
    }
  }, [success]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContact(formData)); // only send formData
  };

  const handleReset = () => {
    dispatch(resetStatus());
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24" />
      <ContactHero />
      <div className="bg-opacity-80 p-8 flex-col  rounded-lg shadow-lg">
        {success ? (
          <ContactConfirmation onReset={handleReset} />
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
              loading={loading}
              error={error}
            />
          </div>
        )}
      </div>
    </div>
  );
}
