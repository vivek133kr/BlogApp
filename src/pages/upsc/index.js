import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import HomeFinal from "../../Components/UPSC/Home";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Josh Talks - UPSC</title>
        <meta name="description" content="My home page description" />

        {/* <meta name="keywords" content={data.keywords} />
          <link rel="canonical" href={data.canonicalUrl} />
          <meta name="robots" content={data.robots} />
          <meta name="author" content={data.author} />
          <meta property="og:title" content={data.ogTitle} />
          <meta property="og:description" content={data.ogDescription} />
          <meta property="og:url" content={data.ogUrl} />
          <meta property="og:image" content={data.ogImage} />
          <meta property="og:type" content={data.ogType} />
          <meta property="og:locale" content={data.ogLocale} />
          */}
      </Head>
      <main className="">
        <HomeFinal data={data} />
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "http://staging.joshtalks.org:9002/api/skill/v1/blogs/"
  );
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
