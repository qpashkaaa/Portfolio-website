import styles from '../../styles/MainPageImage.module.css';

export default function MainPageImage() {
    return (
        <div className={styles.container}>
            <div className={styles.circleUnder}></div>
            <div className={styles.externalCircleUnder}></div>
            <div className={styles.circleUpper}>
                <img className={styles.portfolioImage} src="../../static/images/PortfolioImage.png" alt=""></img>
            </div> 
            <div className={styles.lowerSemicircle}></div>
        </div>
    )
}