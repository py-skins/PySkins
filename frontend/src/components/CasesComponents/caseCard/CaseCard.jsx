import styles from './CaseCard.module.css';

const CaseCard = ({
  caseData,
  onClick,
}) => {
  const handleCardClick = () => {
    onClick(caseData.name)
  }
    return (
        <article id={caseData.case_name} onClick={handleCardClick} className={`${styles.case_card} ${styles.rarity_common}`}>
            <div className={styles.case_img_wrapper}>
              <img src={caseData.image_url} alt="" />
            </div>
            <div className={styles.case_description}>
              <h3 className={styles.case_title}>{caseData.name}</h3>
              <p className={styles.case_price}>
                The price for this case is : 
                <span> {caseData.case_price}</span>
              </p>
            </div>
          </article>
    );
};

export default CaseCard;