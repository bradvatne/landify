export type IRequiredProps = {
    heroContent: THero,
    brandsContent: TBrands,
    headerContent: THeader,
    featuresContent: TFeatures,
    reviewsContent: TReviews,
    statsContent: TStats
    featureLeftContent: TFeatureLeft,
    featureCenterContent: TFeatureCenter,
    ctaContent: TCta
    footerContent: TFooter
}

export interface IHero {
    heroContent: THero,
    headerContent: THeader,
    brandsContent: TBrands
}

export interface IHeader {
    headerContent: Theader
}

export interface IBrands {
    brandsContent: TBrands
}

export interface IFeatures {
    featuresContent: TFeatures
}

export interface IReviews {
    reviewsContent: TReviews
}

export type THero = {
    heading: string,
    lead: string,
    button: {
        label: string,
        url: string
    },
    image: TImage
}

export type TBrands = 
    {
        brand: string,
        logo: string,
        width: string,
        height: string
    }[]


export type THeader = {
    menu_links: {
        label: string,
        url: string
    }[],
    nav_logo: {
        image: string,
        alt: string
    }
    social_links: {
        brand: string,
        url: string,
        icon: string
    }[]
}

export type TFeatures = {
    title: string,
    lead: string,
    features: {
        title: string,
        lead: string,
        icon: string
    }[]
}

type TReview = {
    icon: string,
    alt: string,
    review: string,
    author: string,
    author_details: string
}

export type TReviews = {
    title: string,
    lead: string,
    reviews: {
        left: TReview,
        right_top: TReview,
        right_bottom: TReview
    }
}

type Stat = {
    title: string,
    lead: string,
    icon: string
}

export type TStats = {
    title: string,
    lead: string,
    stats: Stat[]
}

export type TFeatureLeft = {
    image: string,
    title: string,
    lead: string,
    a: {
        label: string,
        url: string
    }
}

export type TFeatureCenter = {
    title: string,
    lead: string,
    image: string
}

export type TCta = {
    title: string,
    lead: string,
    cta: string,
    button1: string,
    button2: string,
    image1: string,
    image2: string
}

type Link = {
    link: string,
    label: string
}

export type TFooter = {
    logo: string,
    download: Link,
    liscence: Link,
    nav: Link[]
}