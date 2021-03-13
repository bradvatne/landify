import styles from "../styles/Features.module.scss";

export default function Features({ featuresContent }) {
  return (
    <div className={styles.features_wrapper}>
      <div className={styles.grid}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>{featuresContent.title}</h2>
          <p className={styles.lead}>{featuresContent.lead}</p>
        </div>
        {featuresContent.features.map((item, index) => (
          <div className={styles.feature}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.lead}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
