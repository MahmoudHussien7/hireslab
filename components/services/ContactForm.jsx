  "use client";
  import React from "react";
  import BtnSubmit from "../ui/BtnSubmit";

  export default function ContactForm() {
    return (
      <>
        {/* Open the modal using document.getElementById('my_modal_1').showModal() */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-neutral-900 flex justify-center items-center w-[40%] h-auto max-w-none sc">
            <div className="flex flex-col w-full">
              <form method="dialog">
                <button className="font-light text-[1.1rem] pb-14 cursor-pointer text-white">
                  CLOSE
                </button>
              </form>

              <div>
                <h2 className="text-4xl font-bold text-white">Go embedded!</h2>
              </div>
              <div className="flex pb-7 gap-10">
                <ul className="w-auto space-y-3">
                  <li className="flex items-center gap-2 font-sans text-white">
                    <img
                      src="/images/CheckIcon.svg"
                      alt="Check icon"
                      className="w-8 h-8"
                    />
                    flexible subscription model
                  </li>
                  <li className="flex items-center gap-2 font-sans text-white">
                    <img
                      src="/images/CheckIcon.svg"
                      alt="Check icon"
                      className="w-8 h-8"
                    />
                    50% cost saving vs agency model
                  </li>
                </ul>
                <ul className="w-auto space-y-3">
                  <li className="flex items-center gap-2 font-sans text-white">
                    <img
                      src="/images/CheckIcon.svg"
                      alt="Check icon"
                      className="w-8 h-8"
                    />
                    onboard within days
                  </li>
                  <li className="flex items-center gap-2 font-sans text-white">
                    <img
                      src="/images/CheckIcon.svg"
                      alt="Check icon"
                      className="w-8 h-8"
                    />
                    look and feel like your in-house team
                  </li>
                </ul>
              </div>

              <div className="modal-action flex justify-center items-center p-5  w-full">
                <form
                  className="space-y-6 flex flex-col gap-5 w-full p-5"
                  method="dialog"
                >
                  <div className="flex justify-between gap-3 w-full">
                    <label className="floating-label block relative w-1/2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        required
                        className="input input-md bg-transparent text-white border border-b-white transition-all duration-1000 ease-in-out text-[1.1rem] w-full"
                      />
                      <span>First Name*</span>
                    </label>

                    <label className="floating-label block relative w-1/2">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        required
                        className="input input-md bg-transparent text-white border border-b-white transition-all duration-1000 ease-in-out text-[1.1rem] w-full"
                      />
                      <span>Last Name*</span>
                    </label>
                  </div>

                  <label className="floating-label block relative w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      className="input input-md bg-transparent text-white border border-b-white transition-all duration-1000 ease-in-out text-[1.1rem] w-full"
                    />
                    <span>Email*</span>
                  </label>

                  <label className="floating-label block relative w-full">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      required
                      className="input input-md bg-transparent text-white border border-b-white transition-all duration-1000 ease-in-out text-[1.1rem] w-full"
                    />
                    <span>Phone*</span>
                  </label>

                  <label className="floating-label block relative w-full">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject*"
                      required
                      className="input input-md bg-transparent text-white border border-b-white transition-all duration-1000 ease-in-out text-[1.1rem] w-full"
                    />
                    <span>Subject*</span>
                  </label>

                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend text-white">
                      Your Message*
                    </legend>
                    <textarea
                      name="message"
                      placeholder="Please provide us with as much information as possible about your enquiry."
                      className="textarea border border-b-white text-white h-24 w-full bg-transparent"
                    ></textarea>
                  </fieldset>
                  <BtnSubmit name="Schedule a call" />
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </>
    );
  }
