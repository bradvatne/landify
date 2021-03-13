import s from "../styles/Brands.module.scss";
import { IBrands } from "../types";

export default function Brands({ brandsContent }: IBrands) {
  return (
    <div className={s.brand_logos_wrapper}>
      <div className={s.brand_logos_container}>
        {brandsContent.map((item, index) => (
          <img key={index} src={item.logo} alt={item.brand} />
        ))}
      </div>
    </div>
  );
}
