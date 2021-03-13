import styles from "../styles/Brands.module.scss";
import { IBrands } from "../types";

export default function Brands({ brandsContent }: IBrands) {
  return (
    <div className={styles.brand_logos_wrapper}>
      <div className={styles.brand_logos_container}>
        {brandsContent.map((item, index) => (
          <img key={index} src={item.logo} alt={item.brand} />
        ))}
      </div>
    </div>
  );
}
