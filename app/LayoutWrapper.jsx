"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function LayoutWrapper({children}) {
    const pathName=usePathname();
    console.log(pathName);
    const isAuthPage = pathName?.startsWith("/auth") //true or fales return
  return (
    <div>
         {/* Navbar */}
         {!isAuthPage && <Navbar />}

        {/* Page content */}
        {children}

        {/* Footer */}
        {!isAuthPage && <Footer />}
    </div>
  )
}
