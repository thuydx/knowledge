import React from "react";
import CategoryView from './CategoryView';

export async function generateStaticParams() {
  return [
    { category: 'tech' },
    { category: 'guides' },
  ];
}

export default async function CategoryPage({ params }: { params: any }) {

  return (
    <main className="">
      <CategoryView />
    </main>
  );
}
