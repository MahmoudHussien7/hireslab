"use client";

import React from 'react';
import ModalForm from '@/components/services/ModalForm';
import{ useState } from 'react';
import BtnSubmit from '../ui/BtnSubmit';

export default function ServicesBenefits() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

      <section className='container mx-auto px-10 md:px-12 lg:px-20 w-full h-auto text-white flex justify-center items-center py-16'>
        <div className='bg-[#292929] md:flex p-5 rounded-lg'>
          <div className=' p-3'>
            <h2 className='text-2xl font-medium mb-4'>People-first solutions, built for impact.</h2>
            <p className='mb-4'>
            Whether you're building your team locally or expanding internationally,<br></br> The Hires Lab is your trusted hub for all things HR, recruitment, and outsourcing.
            </p>
            <BtnSubmit name="Let's talk" type="text" onClick={() => {setIsModalOpen(true)
             console.log("test")}
             } />
          </div>
          <div className='p-3'>
            <div className='mb-4'>
              <h2 className='text-2xl font-medium'>Benefits</h2>
            </div>

            <div className='lg:flex  gap-6'>
              <ul className="w-auto space-y-3">
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  Heart & Precision
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  Speed & Efficiency
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  Scalable Solutions
                </li>
              </ul>

              <ul className=" w-auto space-y-3">
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  Global Reach
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  Beyond Recruitment
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  Proven Impact
                </li>
              </ul>
            </div>

          </div>
          
        </div>
      </section>
    </>
  )
}
