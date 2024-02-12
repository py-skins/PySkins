import styles from './item.scss'
import items from '../../lib/items'

export default function Item(props) {
  const item = items[props.name] ?? {}

  return (
    <div className={styles.item}>
      <div className={styles.item}>
        <div style={{ backgroundImage: `url(${item.image})` }} className={styles.img} />
        <span className={styles.price}>{item.price.toFixed(2)}$</span>
      </div>
      <div className={[styles.info, styles[`rarity-${item.rarity}`]].join(' ')}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.weapon}>{item.weapon}</span>
      </div>
    </div>
  )
}