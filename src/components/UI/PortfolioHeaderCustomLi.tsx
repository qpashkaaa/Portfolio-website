import styles from '../../styles/PortfolioHeaderCustomLi.module.css';

export default function PortfolioHeaderCustomLi({text, active}) {
    var width = 0;
    if (active == true){
        width = 50;
    }
  return (
    <div className={styles.customLiDiv}>
        <div className={styles.tabTextDiv}>{text}</div>
        <div className={`textUnderline ${styles.textUnderline}`}></div>
        <style jsx>{`
                .textUnderline {
                    width: ${width}%;
            `}</style>
    </div>
  )
}