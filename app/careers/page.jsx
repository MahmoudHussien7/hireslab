// ContactUs.jsx
"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContact, resetStatus } from "@/redux/slices/contactSlice";
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
    cv: null, // Store file object
    role: "",
    subject: "",
    message: "",
  });
  const [optimisticSuccess, setOptimisticSuccess] = useState(false);

  // Reset form on actual success
  useEffect(() => {
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cv: null, // Reset CV
        role: "",
        subject: "",
        message: "",
      });
      setRole("Candidate");
      setLookingFor("Select one");
      setOptimisticSuccess(true);
    }
  }, [success]);

  // Revert optimistic update on error
  useEffect(() => {
    if (error) {
      setOptimisticSuccess(false);
    }
  }, [error]);

  // Update formData.subject whenever lookingFor changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, subject: lookingFor }));
  }, [lookingFor]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "cv") {
      // Handle file input
      setFormData((prev) => ({ ...prev, cv: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create FormData object for multipart form submission
    const submissionData = new FormData();
    submissionData.append("firstName", formData.firstName);
    submissionData.append("lastName", formData.lastName);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    if (formData.cv) {
      submissionData.append("cv", formData.cv); // Append CV file
    }
    submissionData.append("role", role);
    submissionData.append("subject", lookingFor);
    submissionData.append("message", formData.message);

    // Optimistically set success state
    setOptimisticSuccess(true);
    dispatch(submitContact(submissionData));
  };

  const handleReset = () => {
    dispatch(resetStatus());
    setOptimisticSuccess(false);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24" />
      <ContactHero />
      <div className="bg-opacity-80 p-8 flex-col rounded-lg shadow-lg">
        {optimisticSuccess || success ? (
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
              onBack={() => {
                setLookingFor("Select one");
                setOptimisticSuccess(false);
              }}
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
