import headerJSON from "../content/header.json";
import heroJSON from "../content/hero.json";
import brandsJSON from "../content/brands.json";
import featuresJSON from "../content/features.json";
import reviewsJSON from "../content/reviews.json";
import { Hero, Features, Reviews } from "../containers";
import {
  IRequiredProps,
  THero,
  TBrands,
  THeader,
  TFeatures,
  TReviews,
} from "../types";

export default function Home({
  heroContent,
  brandsContent,
  headerContent,
  featuresContent,
  reviewsContent,
}: IRequiredProps) {
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
  let heroContent: THero = heroJSON;
  let brandsContent: TBrands = brandsJSON;
  let headerContent: THeader = headerJSON;
  let featuresContent: TFeatures = featuresJSON;
  let reviewsContent: TReviews = reviewsJSON;

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
