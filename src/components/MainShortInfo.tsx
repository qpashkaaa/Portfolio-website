import styles from '../styles/MainShortInfo.module.css';

export default function MainShortInfo() {
    return (
        <div className={styles.mainFlexDiv}>
            <div className = {styles.wrapperFlexDiv}>
                <div className={styles.leftFlexDiv}>
                    <div className={styles.numberDiv}>3+</div>
                    <div className={styles.textDiv}>Years of <br></br>commercial <br></br>development</div>
                </div>
                <div className={styles.centerFlexDiv}>
                    <div className={styles.numberDiv}>10+</div>
                    <div className={styles.textDiv}>Projects</div>
                </div>
                <div className={styles.rightFlexDiv}>
                    <div className={styles.numberDiv}>15+</div>
                    <div className={styles.textDiv}>Development <br></br>tools</div>
                </div>
            </div>
        </div>
    )
}