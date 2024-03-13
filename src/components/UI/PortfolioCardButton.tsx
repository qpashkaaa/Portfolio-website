import Link from 'next/link';
import styles from '../../styles/PortfolioCardButton.module.css';

export default function PortfolioCardButton({ text, href }) {
    if (text == 'Code'){
        var imgSrc = '../../../static/images/GitHubImage.svg';
    }
    else if (text == 'Demo' || text == 'Owner'){
        var imgSrc = '../../../static/images/LinkButtonImage.svg';
    }
    return (
        <Link className={styles.link} href = {href} target={'_blank'}>
            <div className={styles.mainFlex}>
                <div className={styles.imgDiv}>
                    <img className={styles.img} src={imgSrc} alt=''></img>
                </div>
                <div className={styles.textDiv}>{text}</div>
            </div>
        </Link>
    )
}