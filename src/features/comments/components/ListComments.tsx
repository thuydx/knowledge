'use client'

import {CCard, CCardBody, CCardFooter, CCardHeader, CCol
  // , CListGroup, CListGroupItem, CRow
} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import React from "react";
import data from "@/data/comments.json";
// import * as iconPro from "@coreui/icons-pro";

export default function ListComments() {
  const comments = data;
  return (
   <>
       {comments.map((cmt, idx) => (
         <CCol xs key={idx}>
           <CCard>
             <CCardHeader><CIcon icon={cmt.icon} size="lg" className={'text-success'}/>
               <b> {cmt.name}</b></CCardHeader>
             <CCardBody>
               {cmt.text}
             </CCardBody>
             <CCardFooter>
               <small className="text-body-secondary">Last updated 3 mins ago</small>
             </CCardFooter>
           </CCard>
         </CCol>
       ))}
   </>
  )
}
