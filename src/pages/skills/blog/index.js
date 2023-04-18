import React from "react";

import Head from "next/head";
import BlogDetails from "@/Components/Skills/BlogDetail/BlogDetail";
function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Blog" />
      </Head>
      <BlogDetails />
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  return {
    props: {},
  };
}
