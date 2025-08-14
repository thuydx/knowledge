'use client'

import * as iconPro from "@coreui/icons-pro";
import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import React from "react";
import data from "@/data/articles.json"
export default function ArticleDetails() {

  const kb = data[0];
  // const iconMap: Record<string, any> = iconPro;

  return (
    <>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
          <CCol xs>
            <CCard>
              <CCardHeader>
                <CIcon icon={kb.icon} size="lg" className={'text-success'}/>
                <b> {kb.name}</b></CCardHeader>
              <CCardBody>
                {kb.description}
              </CCardBody>
              <CCardFooter>
                <small className="text-body-secondary me-2">
                  <CIcon icon={iconPro.cidPeople} size="sm" className="text-info me-1"/>
                  {kb.author}</small>
                <small className="text-body-secondary me-2">
                  <CIcon icon={iconPro.cilCalendarAlt} size="sm" className="text-info me-1"/>
                  {kb["created-date"]}</small>
                <small className="text-body-secondary me-2">
                  <CIcon icon={iconPro.cidCommentBubble} size="sm" className="text-info me-1"/>
                  {kb["comments-number"]}</small>
                <small className="text-body-secondary me-2">
                  <CIcon icon={iconPro.cidViewStream} size="sm" className="text-info me-1"/>
                  {kb["views-number"]}</small>
                <small className="text-body-secondary me-2">
                  <CIcon icon={iconPro.cilThumbUp} size="sm" className="text-info me-1"/>
                  {kb["likes-number"]}</small>
                <small className="text-body-secondary me-2">
                  <CIcon icon={iconPro.cilThumbDown} size="sm" className="text-info me-1"/>
                  {kb["dislikes-number"]}</small>
                {kb.tags.map((tag, aIdx) => (
                  <CButton color="secondary" key={aIdx} className="me-2">{tag}</CButton>
                ))}
              </CCardFooter>
            </CCard>
          </CCol>
      </CRow>
    </>
  );
}
