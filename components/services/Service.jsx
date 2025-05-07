"use client";

import React, { useState } from "react";
import ServiceSectionRight from "./ServiceSectionRight";
import ServiceSectionLeft from "./ServiceSectionLeft";
import BtnSubmit from "../ui/BtnSubmit";
import ModalForm from "@/components/services/ModalForm";

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="bg-[#F7F7F7]">
        <div className="container m-auto md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
            How embedded <br />
            talent works
          </h2>
        </div>
        <ServiceSectionRight /> 

        {/* Final section with button */}
        <ServiceSectionLeft
          component={
            <div className="mt-10 flex justify-center">
              <BtnSubmit
                name="Schedule a call"
                type="button"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          }
        />
      </section>
    </>
  );
}
