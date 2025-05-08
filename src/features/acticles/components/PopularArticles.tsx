'use client'


import {CCard, CCardBody, CCardHeader, CListGroupItem} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import * as iconPro from "@coreui/icons-pro";
import React from "react";
import data from '@/data/articles.json';

export default function PopularArticles() {
  const articles = data;
  const iconMap: Record<string, any> = iconPro;
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader><b>Popular Articles</b></CCardHeader>
        <CCardBody>
          {articles.map((article, idx) => (
            <CListGroupItem key={idx} as="a" href={article.link}>
              <CIcon icon={iconMap[article.icon]} size="sm" className="text-info me-2"/>
              {article.name}
            </CListGroupItem>
          ))}
        </CCardBody>
      </CCard>
    </>
  )
}
