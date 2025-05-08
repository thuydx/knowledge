'use client'

import {CCard, CCardBody, CCardFooter, CCardHeader, CCol, CListGroup, CListGroupItem, CRow, CLink} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import React from "react";
import data from "@/data/category.json"
import * as iconPro from "@coreui/icons-pro";

export default function ListCategories() {
  const categories = data;
  const iconMap: Record<string, any> = iconPro;
  return (
    <>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 3}}>
        {categories.map((category, idx) => (
          <CCol xs key={idx}>
            <CCard>
              <CCardHeader><CIcon icon={iconMap[category.icon]} size="lg" className={'text-success me-2'}/>
                <CLink href={category.link} className={'link-info link-underline-opacity-0 '}><b>{category.name}</b></CLink>
              </CCardHeader>
              <CCardBody>
                <CListGroup flush>
                  {category.articles.map((article, aIdx) => (
                    <CListGroupItem key={aIdx} as="a" href={article.link}>
                      <CIcon icon={iconMap[article.icon]} size="sm" className="text-info me-2"/>
                      {article.name}
                    </CListGroupItem>
                  ))}
                </CListGroup>
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
