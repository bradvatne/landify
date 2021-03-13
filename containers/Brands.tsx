import styles from "../styles/Brands.module.scss";

export default function Brands({ content }) {
  return (
    <div className={styles.brand_logos_wrapper}>
      <div className={styles.brand_logos_container}>
        <img src="./images/brand_logos/airbnb.svg" />
        <img src="./images/brand_logos/hubspot.svg" />
        <img src="./images/brand_logos/google.svg" />
        <img src="./images/brand_logos/microsoft.svg" />
        <img src="./images/brand_logos/walmart.svg" />
        <img src="./images/brand_logos/fedex.svg" />
      </div>
    </div>
  );
}
