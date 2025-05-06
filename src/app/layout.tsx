'use client'

import '@/styles/style.scss'
import {Header, Breadcrumb, Footer} from "@/components/base";
import {CContainer} from '@coreui/react-pro'
import AppProvider from '@/components/providers/AppProvider'
import React from "react";

export default function AppLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <title>Knowledge</title>
    </head>
    <body>
    <AppProvider>
      <div className="wrapper d-flex flex-column min-vh-100">
        <Header/>
        <div className="body flex-grow-1">
          <CContainer fluid className="px-4">
            <Breadcrumb/>
            {children}
          </CContainer>
        </div>
        <Footer/>
      </div>
    </AppProvider>
    </body>
    </html>
  )
}

