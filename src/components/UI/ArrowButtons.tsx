import styles from '../../styles/ArrowButtons.module.css';

export default function ArrowButtons({clickBack, clickForward}) {
  return (
    <div className={styles.mainFlex}>
        <div className={styles.leftArrow} onClick={clickBack}></div>
        <div className={styles.rightArrow} onClick={clickForward}></div>
    </div>
  )
}