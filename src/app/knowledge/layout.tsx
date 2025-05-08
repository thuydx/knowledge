'use client'

import React from "react";
import {CCol, CRow} from '@coreui/react-pro'
import RightSideBar from "@/shared/components/knowledge/RightSideBar";


export default function AppLayout({children}: { children: React.ReactNode }) {
  return (
    <CRow>
      <CCol md={9}>
        {children}
      </CCol>
      <CCol md={3}>
        <RightSideBar/>
      </CCol>
    </CRow>
  )
}

