'use client'
import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CCardLink
} from '@coreui/react-pro'
import CIcon from "@coreui/icons-react";
import * as icon from '@coreui/icons';
import * as iconPro from '@coreui/icons-pro';

export default function Home() {
  const categories = [
    {
      name: 'Tech',
      icon: iconPro.cilBolt,
      articles: [
        {
          name: 'React Hooks',
          icon: icon.cilCode,
          link: '/knowledge/tech/react-hooks',
        },
        {
          name: 'Next.js Routing',
          icon: icon.cilArrowRight,
          link: '/knowledge/tech/nextjs-routing',
        },
      ],
    },
    {
      name: 'Guides',
      icon: icon.cilBook,
      articles: [
        {
          name: 'Deployment Guide',
          icon: icon.cilCloudUpload,
          link: '/knowledge/guides/deployment',
        },
        {
          name: 'SEO Tips',
          icon: icon.cilChart,
          link: '/knowledge/guides/seo-tips',
        },
      ],
    },
    {
      name: 'Tech',
      icon: iconPro.cilBolt,
      articles: [
        {
          name: 'React Hooks',
          icon: icon.cilCode,
          link: '/knowledge/tech/react-hooks',
        },
        {
          name: 'Next.js Routing',
          icon: icon.cilArrowRight,
          link: '/knowledge/tech/nextjs-routing',
        },
      ],
    },
    {
      name: 'Guides',
      icon: icon.cilBook,
      articles: [
        {
          name: 'Deployment Guide',
          icon: icon.cilCloudUpload,
          link: '/knowledge/guides/deployment',
        },
        {
          name: 'SEO Tips',
          icon: icon.cilChart,
          link: '/knowledge/guides/seo-tips',
        },
      ],
    },
    {
      name: 'Tech',
      icon: iconPro.cilBolt,
      articles: [
        {
          name: 'React Hooks',
          icon: icon.cilCode,
          link: '/knowledge/tech/react-hooks',
        },
        {
          name: 'Next.js Routing',
          icon: icon.cilArrowRight,
          link: '/knowledge/tech/nextjs-routing',
        },
      ],
    },
    {
      name: 'Guides',
      icon: icon.cilBook,
      articles: [
        {
          name: 'Deployment Guide',
          icon: icon.cilCloudUpload,
          link: '/knowledge/guides/deployment',
        },
        {
          name: 'SEO Tips',
          icon: icon.cilChart,
          link: '/knowledge/guides/seo-tips',
        },
      ],
    },
  ];

  return (
    <>
      <main className="">
        <CRow xs={{cols: 1, gutter: 4}} md={{cols: 3}}>
          {categories.map((category, idx) => (
          <CCol xs key={idx}>
            <CCard>
              <CCardHeader><CIcon icon={category.icon} size="lg" className={'text-success'}/>
                <b> {category.name}</b></CCardHeader>
              <CCardBody>
                <CListGroup flush>
                  {category.articles.map((article, aIdx) => (
                    <CListGroupItem key={aIdx} as="a" href={article.link}>
                      <CIcon icon={article.icon} size="sm" className="text-info me-2" />
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
      </main>
    </>
  );
}
