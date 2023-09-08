import styles from '../../styles/ResumeSection.module.css';

export default function ResumeSection({headText, children}) {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.headTextDiv}>{headText}</div>
        <div className={styles.resumeCardsDiv}>
            {children}
        </div>
    </div>
  )
}