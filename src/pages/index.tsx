import { type NextPage } from "next";
import Head from "next/head";

import Link from "next/link";
import { HomeFeature } from "~/features/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AirBNB Clone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomeFeature />
      </div>
    </>
  );
};

export default Home;
