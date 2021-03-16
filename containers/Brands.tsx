import s from "../styles/Brands.module.scss";
import { IBrands } from "../types";
import Image from 'next/image'

export default function Brands({ brandsContent }: IBrands) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {brandsContent.map((item, index) => (
          <img key={index} src={item.logo} alt={item.brand} />
        ))}
      </div>
    </div>
  );
}
