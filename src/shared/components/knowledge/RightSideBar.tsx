'use client'
import {CCol, CRow} from "@coreui/react-pro";
import React from "react";
import LatestArticles from "@/features/acticles/components/LatestArticles";
import PopularArticles from "@/features/acticles/components/PopularArticles";
import PopularTags from "@/features/tags/components/PopularTags";


export default function RightSideBar() {

  return (
    <>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        <CCol xs>
          <PopularArticles/>
        </CCol>
      </CRow>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        <CCol xs>
          <LatestArticles/>
        </CCol>
      </CRow>

      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        <CCol xs>
          <PopularTags/>
        </CCol>
      </CRow>
    </>
  )
}
