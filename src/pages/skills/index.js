import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import HomeFinal from "@/Components/Skills/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Talks - Skills</title>
        <meta name="description" content="My home page description" />
      </Head>
      <main className="">
        <HomeFinal />
      </main>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {},
  };
}
