import React from 'react'
import ServiceSectionRight from './ServiceSectionRight'
import ServiceSectionLeft from './ServiceSectionLeft'
import Btn from '../ui/Btn';

export default function Service() {
  return (
    <>
    <section className='bg-[#F7F7F7]'>
    <div className='container m-auto px-10 md:px-12 lg:px-20 flex items-center py-16 '>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium p-2 text-black">
        How embedded <br/>
        talent works</h2>
      </div>
      <ServiceSectionRight  className=""/>
      <ServiceSectionLeft  className=""/>
      <ServiceSectionRight  className=""/>
      <ServiceSectionLeft  component={<Btn name="Schedule a call"/>}/>
    </section>
    </>
  )
}
