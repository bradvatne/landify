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
        logo: string
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

export type TStats = {

}

export type TFeatureLeft = {

}

export type TFeatureCenter = {

}

export type TCta = {
    
}

export type TFooter = {

}