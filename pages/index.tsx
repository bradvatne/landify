import Head from "next/head";
import Header from "../containers/Header";
import headerContent from "../content/header.json";
import Hero from "../containers/Hero";

const obj = {};
export default function Home() {
  return (
    <>
      <Hero content={{}} headerContent={headerContent} />
    </>
  );
}
