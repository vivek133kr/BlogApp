import React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import BlogDetails from "@/Components/Skills/BlogDetail/BlogDetail";

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
export async function getStaticProps({params})  {
  // Get the slug from the context parameter

 let {slug} = params

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
export async function getStaticPaths() {
  // Fetch the list of all blog posts from the API
 const response = await fetch(
   "http://staging.joshtalks.org:9002/api/skill/v1/blogs/"
 );
 const data = await response.json();

  // Map the list of posts to an array of slugs
  const paths = data.results.map((post) => ({ params: { slug: post.slug } }));

  // Return the array of slugs as paths
  return { paths, fallback: false };
}

export default Blog;
