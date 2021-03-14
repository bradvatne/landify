import {
  headerJSON,
  heroJSON,
  brandsJSON,
  featuresJSON,
  reviewsJSON,
  statsJSON,
  featureLeftJSON,
} from "../content/";
import { Hero, Features, Reviews, Stats, FeatureLeft } from "../containers";
import {
  IRequiredProps,
  THero,
  TBrands,
  THeader,
  TFeatures,
  TReviews,
  TStats,
  TFeatureLeft,
} from "../types";

export default function Home({
  heroContent,
  brandsContent,
  headerContent,
  featuresContent,
  reviewsContent,
  statsContent,
  featureLeftContent
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
      <FeatureLeft featureLeftContent={featureLeftContent} />
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
  let featureLeftContent: TFeatureLeft = featureLeftJSON;

  return {
    props: {
      heroContent,
      brandsContent,
      headerContent,
      featuresContent,
      reviewsContent,
      statsContent,
      featureLeftContent,
    },
  };
}
