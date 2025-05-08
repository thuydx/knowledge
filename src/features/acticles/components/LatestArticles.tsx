'use client'

import {CCard, CCardBody, CCardHeader, CListGroupItem} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import React from "react";
import data from '@/data/articles.json';
import * as iconPro from "@coreui/icons-pro";

export default function LatestArticles() {
  const articles = data;
  const iconMap: Record<string, any> = iconPro;
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader><b>Latest Articles</b></CCardHeader>
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
  );
}
