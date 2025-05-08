'use client'

import '@/styles/style.scss'
import {CContainer} from '@coreui/react-pro'
import {Header, Breadcrumb, Footer} from "@/shared/components/base";
import AppProvider from '@/shared/providers/AppProvider'
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

