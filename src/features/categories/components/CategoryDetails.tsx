'use client'

import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  // CCardFooter,
  CCol,
  CRow,
  // CButton,
} from '@coreui/react-pro'
import CIcon from "@coreui/icons-react";
import data from '@/data/knowledge.json';
import * as iconPro from '@coreui/icons-pro';

export default function CategoryDetails() {

  const knowledge = data;
  // const iconMap: Record<string, any> = iconPro;
  return (
    <>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        {knowledge.map((kb, idx) => (
          <CCol xs key={idx}>
            <CCard>
              <CCardHeader><CIcon icon={kb.icon} size="lg" className={'text-success'}/>
                <b> {kb.name}</b></CCardHeader>
              <CCardBody>
                {kb.description}
              </CCardBody>

            </CCard>
          </CCol>
        ))}
      </CRow>
    </>
  );
}
