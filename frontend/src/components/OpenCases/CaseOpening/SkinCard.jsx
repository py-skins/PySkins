import styles from "./SkinCard.module.css";

const SkinCard = ({ skin }) => {
  const avgPrice = 0.0;

  return (
    <div className={styles.skinCard}>
      <div
        className={styles.imageContainer}
        style={{ borderLeft: `6px solid ${skin.rarity_color}` }}
      >
        <img className={styles.img} src={skin.preview_image_url} alt="Skin" />
        <div className={styles.hoverPopUp}>
          <p className={styles.hoverPopUpIcon}>
            <i className="fa-brands fa-steam"></i>
          </p>
          <div className={styles.dropOdd}>
            <p>Chance: 00.00%</p>
            <p>{avgPrice} $</p>
          </div>
        </div>
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.itemName}>{skin.name}</p>
      </div>
    </div>
  );
};

export default SkinCard;
