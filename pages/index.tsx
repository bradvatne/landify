import Head from "next/head";
import {
  headerJSON,
  heroJSON,
  brandsJSON,
  featuresJSON,
  reviewsJSON,
  statsJSON,
  featureLeftJSON,
  featureCenterJSON,
  ctaJSON,
  footerJSON,
} from "../content/";
import {
  Hero,
  Features,
  Reviews,
  Stats,
  FeatureLeft,
  FeatureCenter,
  Cta,
  Footer,
} from "../containers";
import {
  IRequiredProps,
  THero,
  TBrands,
  THeader,
  TFeatures,
  TReviews,
  TStats,
  TFeatureLeft,
  TFeatureCenter,
  TCta,
  TFooter,
} from "../types";

export default function Home({
  heroContent,
  brandsContent,
  headerContent,
  featuresContent,
  reviewsContent,
  statsContent,
  featureLeftContent,
  featureCenterContent,
  ctaContent,
  footerContent,
}: IRequiredProps) {
  return (
    <>
      <Head>
        <title>Landify</title>
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        <link rel="alternate icon" href="/images/logo.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8a01" />
        <meta property="og:title" content="Landify UI Kit" />
        <meta
          property="og:description"
          content="From Figma Mockup to Live Website"
        />
        <meta
          property="og:image"
          content="https://github.com/bradvatne/landify/blob/main/public/images/landify.png"
        />
        <meta
          property="og:url"
          content="https://landify-bradvatne.vercel.app/"
        />
        <meta name="twitter:title" content="Landify UI Kit " />
        <meta
          name="twitter:description"
          content=" From Figma Mockup to Live Website"
        />
        <meta
          name="twitter:image"
          content=" https://github.com/bradvatne/landify/blob/main/public/images/landify.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero
        heroContent={heroContent}
        headerContent={headerContent}
        brandsContent={brandsContent}
      />
      <Features featuresContent={featuresContent} />
      <Reviews reviewsContent={reviewsContent} />
      <Stats statsContent={statsContent} />
      <FeatureLeft featureLeftContent={featureLeftContent} />
      <FeatureCenter featureCenterContent={featureCenterContent} />
      <Cta ctaContent={ctaContent} />
      <Footer footerContent={footerContent} />
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
  let featureCenterContent: TFeatureCenter = featureCenterJSON;
  let ctaContent: TCta = ctaJSON;
  let footerContent: TFooter = footerJSON;

  return {
    props: {
      heroContent,
      brandsContent,
      headerContent,
      featuresContent,
      reviewsContent,
      statsContent,
      featureLeftContent,
      featureCenterContent,
      ctaContent,
      footerContent,
    },
  };
}
