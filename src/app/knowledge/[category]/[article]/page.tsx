import React from "react";
import ArticleDetails from "@/features/acticles/components/ArticleDetails";
import ListComments from "@/features/comments/components/ListComments";
import {CCol, CRow} from "@coreui/react-pro";

export async function generateStaticParams() {
  return [
    {category: 'tech', article: 'react-hooks'},
    {category: 'tech', article: 'nextjs'},
    {category: 'tech', article: 'nextjs-routing'},
    {category: 'guides', article: 'typescript'},
    {category: 'guides', article: 'seo-tips'},
    {category: 'guides', article: 'deployment'},
  ];
}

export default async function ArticlePage() {

  return (
    <>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        <CCol xs>
          <ArticleDetails/>
        </CCol>
      </CRow>
      <h2 className="mt-4">Comments</h2>
      <CRow xs={{cols: 1, gutter: 4}} md={{cols: 1}}>
        <ListComments/>
      </CRow>
    </>
  );
}
