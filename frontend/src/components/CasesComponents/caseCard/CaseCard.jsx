import styles from "./CaseCard.module.scss";

const CaseCard = ({ caseData, onClick }) => {
  const handleCardClick = () => {
    onClick(caseData.slug);
  };

  return (
    <article
      id={caseData.name}
      onClick={handleCardClick}
      className={`${styles.article} ${styles.rarity_common}`}
    >
      <img src={caseData.image_url} alt="case-img" />
      <div className={styles.desc}>
        <p className={styles.title}>{caseData.name}</p>
        <p className={styles.price}>
          Price: <span> {caseData.price}</span>
        </p>
      </div>
    </article>
  );
};

export default CaseCard;
