import Image from 'next/image'
import Head from "next/head";
import { Inter } from 'next/font/google'
import HomeFinal from "../../Components/Skills/Home";
const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Josh Talks - Skills</title>
        <meta name="description" content="My home page description" />
      </Head>
      <main className="">
        <HomeFinal data={data}/>
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
