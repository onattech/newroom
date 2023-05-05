import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainContainer from "@/components/Contianer/MainContainer";
import { Home } from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Head>
        <title>Free AI Tool: Room Design</title>
        <meta name="description" content="Newroom app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer className="mainPage">
        <Home />
      </MainContainer>
    </>
  );
}
