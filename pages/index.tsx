import headerJSON from "../content/header.json";
import heroJSON from "../content/hero.json";
import brandsJSON from "../content/brands.json";
import { Hero, Features } from "../containers";

const obj = {};
export default function Home({ heroContent, brandsContent, headerContent }) {
  return (
    <>
      <Hero
        heroContent={heroContent}
        headerContent={headerContent}
        brandsContent={brandsContent}
      />
      <Features />
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
      headerContent,
    },
  };
}
