import styles from "../styles/Reviews.module.scss";

export default function Reviews({ reviewsContent }) {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <img src={"/images/quote.svg"} className={styles.quote_image} />
        <div className={styles.title_container}>
          <h2 className={styles.title}>{reviewsContent.title}</h2>
          <p className={styles.lead}>{reviewsContent.lead}</p>
          <div className={styles.review_left}></div>
        </div>
        <div className={styles.reviews_right_container}>
            <div className={styles.right_top_review}>
                
            </div>
            <div className={styles.right_bottom_review}>
                
            </div>
        </div>
      </div>
    </div>
  );
}
