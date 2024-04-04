import styles from "./SkinCard.module.css";

const SkinCard = ({ skin }) => {
  // console.log(skin);

  // let counter = 0;
  // let currPrice = 0;
  // const skinPrices = skin.quality_prices;
  // for (let [_, price] of Object.entries(skinPrices)) {
  //   const numberPrice = Number(price.price);
  //   counter++;
  //   currPrice += numberPrice;
  // }

  const avgPrice = 0.0; //(currPrice / counter).toFixed(2);
  //{skin.skin_rarity.chance.toFixed(2)}

  return (
    <article className={styles.item}>
      <a href="#" target="_blank">
        <div
          className={styles.itemImg}
          style={{ borderLeft: `6px solid ${skin.rarity_color}` }}
        >
          <img src={skin.preview_image_url} alt="Skin image" />
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
      </a>
    </article>
  );
};

export default SkinCard;
