'use client'

import {CButton, CCard, CCardBody, CCardHeader} from "@coreui/react-pro";
import React from "react";
import data from '@/data/tags.json';

export default function PopularTags() {
  const tags = data;

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader><b>Popular Tags</b></CCardHeader>
        <CCardBody>
          {tags.map((tag, idx) => (
            <CButton color="secondary" key={idx} className="me-2 my-2">{tag}</CButton>
          ))}
        </CCardBody>
      </CCard>
    </>
  )
}
