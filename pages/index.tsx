import {
  headerJSON,
  heroJSON,
  brandsJSON,
  featuresJSON,
  reviewsJSON,
  statsJSON,
} from "../content/";
import { Hero, Features, Reviews, Stats } from "../containers";
import {
  IRequiredProps,
  THero,
  TBrands,
  THeader,
  TFeatures,
  TReviews,
  TStats,
} from "../types";

export default function Home({
  heroContent,
  brandsContent,
  headerContent,
  featuresContent,
  reviewsContent,
  statsContent,
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
      <Stats statsContent={statsContent} />
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
  let statsContent: TStats = statsJSON;

  return {
    props: {
      heroContent,
      brandsContent,
      headerContent,
      featuresContent,
      reviewsContent,
      statsContent,
    },
  };
}
