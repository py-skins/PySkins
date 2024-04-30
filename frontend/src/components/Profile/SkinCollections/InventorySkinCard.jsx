import styles from "./InverntorySkinCard.module.scss";

import SkinTooltip from "./SkinTooltip";

const InventorySkinCard = ({ skinData }) => {
  return (
    <>
      <SkinTooltip skinData={skinData} />
      <article className={`${styles.item} skin-tooltip`}>
        <div
          className={styles.itemImg}
          style={{
            borderLeft: `6px solid ${skinData.skin_rarity.rarity_color}`,
          }}
        >
          <img src={skinData.main_image_url} alt="Skin" />
        </div>
        <div className={styles.itemInfo}>
          <p className={styles.itemName}>{skinData.name}</p>
        </div>
      </article>
    </>
  );
};

export default InventorySkinCard;
