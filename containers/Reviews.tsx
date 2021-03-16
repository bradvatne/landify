import s from "../styles/Reviews.module.scss";
import { IReviews } from "../types";
import Image from "next/image";

export default function Reviews({ reviewsContent }: IReviews) {
  const { title, lead, reviews } = reviewsContent;
  return (
    <div className={s.section}>
      <div className={s.wrapper}>
        <div className={s.quotes_large}>
          <Image
            width={143}
            height={120}
            alt="Stylish Quotation Marks"
            src={"/images/quote.svg"}
          />
        </div>
        <div className={s.left}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.lead}>{lead}</p>
          <div className={s.review_left}>
            <div className={s.brand}>
              <Image
                width={85}
                height={24}
                src={reviews.left.icon}
                alt={reviews.left.alt}
                className={s.brand}
              />
            </div>
            <div className={s.quotes_small}>
              <Image
                width={16}
                height={14}
                alt="Stylish Quotation Marks"
                src={"/images/quote.svg"}
                className={s.quotes_small}
              />
            </div>
            <p className={s.review_text}>{reviews.left.review}</p>
            <p className={s.review_author}>{reviews.left.author}</p>
            <p className={s.review_author_details}>
              {reviews.left.author_details}
            </p>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.right_top_review}>
            <div className={s.brand}>
              <Image
                width={91}
                height={28}
                src={reviews.right_top.icon}
                alt={reviews.right_top.alt}
              />
            </div>
            <div className={s.quotes_small}>
              <Image
                width={16}
                height={14}
                alt="Stylish Quotation Marks"
                src={"/images/quote.svg"}
                className={s.quotes_small}
              />
            </div>
            <p className={s.review_text}>{reviews.right_top.review}</p>
            <p className={s.review_author}>{reviews.right_top.author}</p>
            <p className={s.review_author_details}>
              {reviews.right_top.author_details}
            </p>
          </div>
          <div className={s.right_bottom_review}>
            <div className={s.brand}>
              <Image
                width={112}
                height={26}
                src={reviews.right_bottom.icon}
                alt={reviews.right_bottom.alt}
              />
            </div>
            <div className={s.quotes_small}>
              <Image
                width={16}
                height={14}
                alt="Stylish Quotation Marks"
                src={"/images/quote.svg"}
                className={s.quotes_small}
              />
            </div>
            <p className={s.review_text}>{reviews.right_bottom.review}</p>
            <p className={s.review_author}>{reviews.right_bottom.author}</p>
            <p className={s.review_author_details}>
              {reviews.right_bottom.author_details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
