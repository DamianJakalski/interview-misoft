import type { NextPage } from "next";
import { CharactersContainer } from "./components/charactersContainer";
import Head from "next/head";
import { Navbar } from "./components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty - Favorite Characters List</title>
        <meta
          name="description"
          content="List of favorite characters from Rick and Morty TV show"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CharactersContainer />
    </>
  );
};

export default Home;
