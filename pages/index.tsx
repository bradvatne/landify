import Head from "next/head";
import Header from "../containers/Header";
import headerJSON from "../content/header.json";
import heroJSON from "../content/hero.json";
import brandsJSON from "../content/brands.json";
import Hero from "../containers/Hero";

const obj = {};
export default function Home({heroContent, brandsContent, headerContent}) {
  return (
    <>
      <Hero heroContent={heroContent} headerContent={headerContent} brandsContent={brandsContent} />
    </>
  );
}

export function getStaticProps() {
  let heroContent = heroJSON;
  let brandsContent = brandsJSON;
  let headerContent = headerJSON;

  return {
    props: {
      heroContent,
      brandsContent,
      headerContent
    }
  }
}