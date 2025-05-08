import React from "react";
import ListArticles from "@/features/acticles/components/ListArticles";

export async function generateStaticParams() {
  return [
    { category: 'tech' },
    { category: 'guides' },
  ];
}

export default async function CategoryPage() {

  return (
      <ListArticles />
  );
}
