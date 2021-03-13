import headerJSON from "../content/header.json";
import heroJSON from "../content/hero.json";
import brandsJSON from "../content/brands.json";
import featuresJSON from "../content/features.json";
import { Hero, Features } from "../containers";

const obj = {};
export default function Home({ heroContent, brandsContent, headerContent, featuresContent }) {
  return (
    <>
      <Hero
        heroContent={heroContent}
        headerContent={headerContent}
        brandsContent={brandsContent}
      />
      <Features featuresContent={featuresContent} />
    </>
  );
}

export function getStaticProps() {
  let heroContent = heroJSON;
  let brandsContent = brandsJSON;
  let headerContent = headerJSON;
  let featuresContent = featuresJSON;

  return {
    props: {
      heroContent,
      brandsContent,
      headerContent,
      featuresContent
    },
  };
}
