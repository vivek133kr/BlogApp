import React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import BlogDetails from "@/Components/UPSC/BlogDetail/BlogDetail";

function Blog({ post, data }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="My Blog" />
      </Head>
      <BlogDetails post={post} data={data} />
    </div>
  );
}

// Define the `getServerSideProps` function to fetch the data for the blog post
export async function getServerSideProps(context) {
  // Get the slug from the context parameter
  const { slug } = context.query;

  // Fetch the data for the blog post using the slug
  const res = await fetch(
    `http://staging.joshtalks.org:9002/api/skill/v1/blogs/${slug}`
  );
  const post = await res.json();
 const response = await fetch(
   "http://staging.joshtalks.org:9002/api/skill/v1/blogs/"
 );
 const data = await response.json();
  // Return the blog post as props
  return {
    props: {
      "post": post,
      "data":data
    },
  };
}

export default Blog;
