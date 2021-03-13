import headerJSON from "../content/header.json";
import heroJSON from "../content/hero.json";
import brandsJSON from "../content/brands.json";
import featuresJSON from "../content/features.json";
import reviewsJSON from "../content/reviews.json";
import { Hero, Features, Reviews } from "../containers";

export default function Home({
  heroContent,
  brandsContent,
  headerContent,
  featuresContent,
  reviewsContent
}) {
  return (
    <>
      <Hero
        heroContent={heroContent}
        headerContent={headerContent}
        brandsContent={brandsContent}
      />
      <Features featuresContent={featuresContent} />
      <Reviews reviewsContent={reviewsContent} />
    </>
  );
}

export function getStaticProps() {
  //This is dummy data, normally you would get data from your CMS and convert it to JSON here
  let heroContent = heroJSON;
  let brandsContent = brandsJSON;
  let headerContent = headerJSON;
  let featuresContent = featuresJSON;
  let reviewsContent = reviewsJSON;

  return {
    props: {
      heroContent,
      brandsContent,
      headerContent,
      featuresContent,
      reviewsContent,
    },
  };
}
