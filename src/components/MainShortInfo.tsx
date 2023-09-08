import styles from '../styles/MainShortInfo.module.css';

export default function MainShortInfo() {
    return (
        <div className={styles.mainFlexDiv}>
            <div className = {styles.wrapperFlexDiv}>
                <div className={styles.leftFlexDiv}>
                    <div className={styles.numberDiv}>5+</div>
                    <div className={styles.textDiv}>Pet-проектов</div>
                </div>
                <div className={styles.centerFlexDiv}>
                    <div className={styles.numberDiv}>1+</div>
                    <div className={styles.textDiv}>Год разработки</div>
                </div>
                <div className={styles.rightFlexDiv}>
                    <div className={styles.numberDiv}>15+</div>
                    <div className={styles.textDiv}>Инструментов <br></br>разработки</div>
                </div>
            </div>
        </div>
    )
}