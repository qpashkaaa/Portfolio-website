import styles from '../../styles/ResumeCard.module.css';

export default function ResumeCard({mainText, supportText, rangeOfYears}) {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.textDiv}>
            <div className={styles.mainTextDiv}>{mainText}</div>
            <div className={styles.supportTextDiv}>{supportText}</div>
        </div>
        <div className={styles.rangeOfYearsDiv}>{rangeOfYears}</div>
    </div>
  )
}
