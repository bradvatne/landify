import styles from "../styles/Reviews.module.scss";

export default function Reviews({ reviewsContent }) {
  const review = reviewsContent.reviews;
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <img src={"/images/quote.svg"} className={styles.quotes_large} />
        <div className={styles.left}>
          <h2 className={styles.title}>{reviewsContent.title}</h2>
          <p className={styles.lead}>{reviewsContent.lead}</p>
          <div className={styles.review_left}>
            <img
              src={review.left.icon}
              alt={review.left.alt}
              className={styles.brand}
            />

            <img src={"/images/quote.svg"} className={styles.quotes_small} />
            <p className={styles.review_text}>{review.left.review}</p>
            <p className={styles.review_author}>{review.left.author}</p>
            <p className={styles.review_author_details}>
              {review.left.author_details}
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_top_review}>
            <img
              src={review.right_top.icon}
              alt={review.right_top.alt}
              className={styles.brand}
            />
            <img src={"/images/quote.svg"} className={styles.quotes_small} />
            <p className={styles.review_text}>{review.right_top.review}</p>
            <p className={styles.review_author}>{review.right_top.author}</p>
            <p className={styles.review_author_details}>
              {review.right_top.author_details}
            </p>
          </div>
          <div className={styles.right_bottom_review}>
            <img
              src={review.right_bottom.icon}
              alt={review.right_bottom.alt}
              className={styles.brand}
            />
            <img src={"/images/quote.svg"} className={styles.quotes_small} />
            <p className={styles.review_text}>{review.right_bottom.review}</p>
            <p className={styles.review_author}>{review.right_bottom.author}</p>
            <p className={styles.review_author_details}>
              {review.right_bottom.author_details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
