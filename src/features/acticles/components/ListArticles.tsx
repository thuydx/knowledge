'use client'
import { useParams } from 'next/navigation';
import data from "@/data/articles.json"
import * as iconPro from "@coreui/icons-pro";
import {CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow, CLink} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import React from "react";
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
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CCardFooter>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </>
  );
}
