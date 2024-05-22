import styles from "./SkinTooltip.module.scss";
import { Tooltip } from "primereact/tooltip";

const InventorySkinCard = ({ skinData }) => {
  return (
    <Tooltip className={styles.content} target=".skin-tooltip">
      <p className={styles.name}>Name : {skinData.name}</p>
      {/* <p className={styles.type}>Rarity : {skinData.skin_rarity.weapon_type}</p> */}
    </Tooltip>
  );
};

export default InventorySkinCard;
