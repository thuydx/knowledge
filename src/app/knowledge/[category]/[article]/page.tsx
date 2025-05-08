import React from "react";
import ArticleView from './ArticleView';

export async function generateStaticParams() {
  return [
    { category: 'tech', article: 'react-hooks' },
    { category: 'tech', article: 'nextjs' },
    { category: 'tech', article: 'nextjs-routing' },
    { category: 'guides', article: 'typescript' },
    { category: 'guides', article: 'seo-tips' },
    { category: 'guides', article: 'deployment' },
  ];
}

export default async function ArticlePage({ params }: { params: any }) {


  return (
    <main className="">
      <ArticleView />
    </main>
  );
}
