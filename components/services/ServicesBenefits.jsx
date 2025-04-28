import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Btn from '../ui/Btn';

export default function ServicesBenefits() {
  return (
    <>
      <section className='container mx-auto px-10 md:px-12 lg:px-20 w-full h-auto text-white flex justify-center items-center py-16'>
        <div className='bg-[#292929] md:flex  p-10 rounded-lg'>
          <div className=' p-3'>
            <h2 className='text-2xl font-medium mb-4'>Go embedded</h2>
            <p className='mb-4'>
              Find out why our partners like Brilliant Planet,
              Copper <br /> and Volta Trucks are all going embedded with Bond.
            </p>
            <Btn name="Let's talk"/>   
            
            {/* <Link
              href="/schedule-a-call"
              target="_blank"
              className="inline-block bg-zaza text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors "
            >
              <span className="flex items-center">
                <span className="mr-3">Let's talk</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.174"
                  height="12.383"
                  viewBox="0 0 20.174 12.383"
                >
                  <g transform="translate(-1735.326 -211.883)">
                    <line
                      y2="19.674"
                      transform="translate(1735.326 218.061) rotate(-90)"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                    <path
                      d="M1.061,126.938l4.867,4.867H7.872l4.865-4.865"
                      transform="translate(1623.194 224.974) rotate(-90)"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </span>
            </Link> */}
          </div>

          <div className='p-3'>
            <div className='mb-4'>
              <h2 className='text-2xl font-medium'>Benefits</h2>
            </div>

            <div className='lg:flex  gap-6'>
              <ul className="w-auto space-y-3">
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  flexible subscription model
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  50% cost saving vs agency model
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  look and feel like your in-house team
                </li>
              </ul>

              <ul className=" w-auto space-y-3">
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  onboard within days
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  100% dedicated to you
                </li>
                <li className="flex items-center gap-2 text-[1.1rem]">
                  <img src="/images/CheckIcon.svg" alt="Check icon" className="w-5 h-5" />
                  embedded 5 days a week
                </li>
              </ul>
            </div>

          </div>
          
        </div>
      </section>
    </>
  )
}
