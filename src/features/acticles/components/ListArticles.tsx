'use client'
import { useParams } from 'next/navigation';
import data from "@/data/articles.json"
import * as iconPro from "@coreui/icons-pro";
import {CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow, CLink, CButton} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import React from "react";
import {Pagination} from "@/shared/components/base/Pagination";
export default function ListArticles() {
  const params = useParams();
  const segments = Array.isArray(params?.segments) ? params.segments : [];
  const category = segments.at(-1) ?? '';

  const articles = data;
  const iconMap: Record<string, any> = iconPro;
  return (
    <>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        {articles.map((article, idx) => (
          <CCol xs key={idx}>
            <CCard>
              <CCardHeader><CIcon icon={iconMap[article.icon]} size="lg" className={'text-success me-2'}/>
                <CLink href={article.link} className={'link-info link-underline-opacity-0 '}><b>{article.name}</b></CLink>
              </CCardHeader>
              <CCardBody>
                {article.description}
              </CCardBody>
              <CCardFooter>
                <CRow xs={{cols: 1, gutter: 4}} md={{cols: 2}}>
                  <CCol xs>
                    <small className="text-body-secondary me-2">
                      <CIcon icon={iconPro.cidPeople} size="sm" className="text-info me-1"/>
                      {article.author}</small>
                    <small className="text-body-secondary me-2">Last updated 3 mins ago</small>
                    <small className="text-body-secondary me-2">
                      <CIcon icon={iconPro.cilCalendarAlt} size="sm" className="text-info me-1"/>
                      {article["created-date"]}</small>
                    <small className="text-body-secondary me-2">
                      <CIcon icon={iconPro.cidCommentBubble} size="sm" className="text-info me-1"/>
                      {article["comments-number"]}</small>
                  </CCol>
                  <CCol xs className="d-flex justify-content-end">
                    <CButton className="btn btn-sm btn-outline-secondary me-md-2" as="a" href={article.link}>Read more</CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        ))}
      </CRow>
      <Pagination />
    </>
  );
}
