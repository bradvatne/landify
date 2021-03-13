import s from "../styles/Reviews.module.scss";

export default function Reviews({ reviewsContent }) {
  const { title, lead, reviews } = reviewsContent;
  return (
    <div className={s.section}>
      <div className={s.wrapper}>
        <img src={"/images/quote.svg"} className={s.quotes_large} />
        <div className={s.left}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.lead}>{lead}</p>
          <div className={s.review_left}>
            <img
              src={reviews.left.icon}
              alt={reviews.left.alt}
              className={s.brand}
            />

            <img src={"/images/quote.svg"} className={s.quotes_small} />
            <p className={s.review_text}>{reviews.left.review}</p>
            <p className={s.review_author}>{reviews.left.author}</p>
            <p className={s.review_author_details}>
              {reviews.left.author_details}
            </p>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.right_top_review}>
            <img
              src={reviews.right_top.icon}
              alt={reviews.right_top.alt}
              className={s.brand}
            />
            <img src={"/images/quote.svg"} className={s.quotes_small} />
            <p className={s.review_text}>{reviews.right_top.review}</p>
            <p className={s.review_author}>{reviews.right_top.author}</p>
            <p className={s.review_author_details}>
              {reviews.right_top.author_details}
            </p>
          </div>
          <div className={s.right_bottom_review}>
            <img
              src={reviews.right_bottom.icon}
              alt={reviews.right_bottom.alt}
              className={s.brand}
            />
            <img src={"/images/quote.svg"} className={s.quotes_small} />
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
