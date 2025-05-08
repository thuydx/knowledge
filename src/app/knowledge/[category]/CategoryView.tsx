'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
  CListGroupItem,
  CButton,
} from '@coreui/react-pro'
import CIcon from "@coreui/icons-react";
import * as icon from '@coreui/icons';
import * as iconPro from '@coreui/icons-pro';

export default function CategoryView() {
  const params = useParams();
  const segments = Array.isArray(params?.segments) ? params.segments : [];
  const category = segments.at(-1) ?? '';

  const tags = [
    'react',
    'nextjs',
    'typescript',
    'javascript',
    'password',
    'settings'
    , 'sign up'
    , 'currency'
    , 'payment'
    , 'user'
    , 'database'
    , 'storage'
    , 'export'
    , 'email'
    , 'import'
    , 'campaign'
    , 'edit'
    , 'orders'
    , 'help'
    , 'billing'
    , 'user'
    , 'configure'
    , 'customer'
  ]
  const articles = [
    {
      name: 'React Hooks',
      icon: icon.cilCode,
      link: '/tech/react-hooks',
    },
    {
      name: 'Next.js Routing',
      icon: icon.cilArrowRight,
      link: '/tech/nextjs-routing',
    },
    {
      name: 'Deployment Guide',
      icon: icon.cilCloudUpload,
      link: '/guides/deployment',
    },
    {
      name: 'SEO Tips',
      icon: icon.cilChart,
      link: '/guides/seo-tips',
    },
  ];
  const knowledge = [
    {
      name: 'Tech',
      icon: iconPro.cilBolt,
      "description": "Tech knowledge",
      'created-date': '2021-01-01',
      tags: ['react', 'nextjs', 'typescript'],
      author: '<NAME>',
      'comments-number': 12,
      'views-number': 123,
      'likes-number': 123,
      'dislikes-number': 123,
    },
    {
      name: 'Guides',
      icon: icon.cilBook,
      "description": "Guides knowledge",
      'created-date': '2021-01-01',
      tags: ['react', 'nextjs', 'typescript'],
      author: '<NAME>',
      'comments-number': 12,
      'views-number': 123,
      'likes-number': 123,
      'dislikes-number': 123,
    },
    {
      name: 'Articles',
      icon: icon.cilBook,
      "description": "Articles knowledge",
      'created-date': '2021-01-01',
      tags: ['react', 'nextjs', 'typescript'],
      author: '<NAME>',
      'comments-number': 12,
      'views-number': 123,
      'likes-number': 123,
      'dislikes-number': 123,
    }

  ];

  return (
    <>
      <main className="">
        <CRow>
          <CCol md={9}>
            <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
              {knowledge.map((kb, idx) => (
                <CCol xs key={idx}>
                  <CCard>
                    <CCardHeader><CIcon icon={kb.icon} size="lg" className={'text-success'}/>
                      <b> {kb.name}</b></CCardHeader>
                    <CCardBody>
                      {kb.description}
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-body-secondary me-2">
                        <CIcon icon={iconPro.cidPeople} size="sm" className="text-info me-1"/>{kb.author}</small>
                      <small className="text-body-secondary me-2">
                        <CIcon icon={iconPro.cilCalendarAlt} size="sm" className="text-info me-1"/>{kb["created-date"]}</small>
                      <small className="text-body-secondary me-2">
                        <CIcon icon={iconPro.cidCommentBubble} size="sm" className="text-info me-1"/>{kb["comments-number"]}</small>
                      <small className="text-body-secondary me-2">
                        <CIcon icon={iconPro.cidViewStream} size="sm" className="text-info me-1"/>{kb["views-number"]}</small>
                      <small className="text-body-secondary me-2">
                        <CIcon icon={iconPro.cilThumbUp} size="sm" className="text-info me-1"/>{kb["likes-number"]}</small>
                      <small className="text-body-secondary me-2">
                        <CIcon icon={iconPro.cilThumbDown} size="sm" className="text-info me-1"/>{kb["dislikes-number"]}</small>
                      {kb.tags.map((tag, aIdx) => (
                        <CButton color="secondary" key={aIdx} className="me-2">{tag}</CButton>
                      ))}
                    </CCardFooter>
                  </CCard>
                </CCol>
              ))}
            </CRow>

          </CCol>
          <CCol xs={6} md={3}>
            <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
              <CCol xs>
                <CCard className="mb-4">
                  <CCardHeader><b>Popular Articles</b></CCardHeader>
                  <CCardBody>
                    {articles.map((article, idx) => (
                      <CListGroupItem key={idx} as="a" href={article.link}>
                        <CIcon icon={article.icon} size="sm" className="text-info me-2"/>
                        {article.name}
                      </CListGroupItem>
                    ))}
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
              <CCol xs>
                <CCard className="mb-4">
                  <CCardHeader><b>Latest Articles</b></CCardHeader>
                  <CCardBody>
                    {articles.map((article, idx) => (
                    <CListGroupItem key={idx} as="a" href={article.link}>
                      <CIcon icon={article.icon} size="sm" className="text-info me-2"/>
                      {article.name}
                    </CListGroupItem>
                    ))}
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>

            <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
              <CCol xs>
                <CCard className="mb-4">
                  <CCardHeader><b>Popular Tags</b></CCardHeader>
                  <CCardBody>
                    {tags.map((tag, idx) => (
                      <CButton color="secondary" key={idx} className="me-2 my-2">{tag}</CButton>
                    ))}
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>

          </CCol>
        </CRow>
      </main>
    </>
  );
}
