"use client";
import React from "react";
import BtnSubmit from "../ui/BtnSubmit";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { submitContact, resetStatus } from "@/redux/slices/contactSlice";
import { useEffect } from "react";

// valdation
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed in First Name")
    .min(2, "First Name must be at least 2 characters")
    .max(20, "First Name must be at most 20 characters"),

  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(20, "Last Name must be at most 20 characters")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed in Last Name"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/@gmail\.com$/, "Email must be a Gmail address"),

  phone: yup
    .string()
    .required("Phone is required")
    .min(12, "Phone must be at least 12 digits")
    .max(12, "Phone must be at most 12 digits"),

  subject: yup
    .string()
    .required("Subject is required")
    .min(2, "Subject must be at least 2 characters")
    .max(20, "Subject must be at most 20 characters"),

  message: yup.string(),

  compnay: yup.string(),

  cv: yup.string(),

  role: yup.string(),
});

export default function ModalForm({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  // form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // onSubmit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(submitContact(data));
    reset();
    onClose();
  };

  useEffect(() => {
    if (success) {
      console.log("Your message has been sent successfully!");
      reset();
      dispatch(resetStatus());
      onClose();
    }

    if (error) {
      console.log("Something went wrong: " + error);
      dispatch(resetStatus());
    }
  }, [success, error, dispatch, reset, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[50] flex items-end justify-end backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-neutral-900 px-20 py-5 rounded-lg max-w-2xl w-full overflow-auto max-h-[100vh]"
          >
            {/* Close button */}
            <div className="flex justify-start pb-20 mt-20">
              <button
                onClick={onClose}
                className="text-white font-bold text-md cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold pb-8 text-white">Go embedded!</h2>

            {/* Features */}
            <div className="flex pb-10 gap-5">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white text-sm">
                  <img src="/images/CheckIcon.svg" className="w-8 h-8" />
                  flexible subscription model
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <img src="/images/CheckIcon.svg" className="w-8 h-8" />
                  50% cost saving vs agency model
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white text-sm">
                  <img src="/images/CheckIcon.svg" className="w-8 h-8" />
                  onboard within days
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <img src="/images/CheckIcon.svg" className="w-8 h-8" />
                  look and feel like your in-house team
                </li>
              </ul>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 flex flex-col w-full"
            >
              <div className="flex flex-wrap gap-3">
                <label className="block w-full md:w-[48%]">
                  <input
                    type="text"
                    placeholder="First Name*"
                    {...register("firstName")}
                    className="input bg-transparent text-white border border-b-white text-[1.1rem] w-full"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </label>

                <label className="block w-full md:w-[48%]">
                  <input
                    type="text"
                    placeholder="Last Name*"
                    {...register("lastName")}
                    className="input bg-transparent text-white border border-b-white text-[1.1rem] w-full"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </label>
              </div>

              <label className="block">
                <input
                  type="email"
                  placeholder="Email*"
                  {...register("email")}
                  className="input bg-transparent text-white border border-b-white text-[1.1rem] w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </label>

              <label className="block">
                <input
                  type="tel"
                  placeholder="Phone*"
                  {...register("phone")}
                  className="input bg-transparent text-white border border-b-white text-[1.1rem] w-full"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </label>

              <label className="block">
                <input
                  type="text"
                  placeholder="Subject*"
                  {...register("subject")}
                  className="input bg-transparent text-white border border-b-white text-[1.1rem] w-full"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </label>

              <fieldset>
                <legend className="text-white">Your Message*</legend>
                <textarea
                  placeholder="Please provide us with as much information as possible about your enquiry."
                  {...register("message")}
                  className="textarea border border-b-white text-white h-24 w-full bg-transparent"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </fieldset>

              <BtnSubmit name="Schedule a call" type="submit" />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
