import styles from '../../styles/RewindButton.module.css';
import Link from 'next/link';

export default function RewindButton({ href, text, imgSrc}) {
    return (
        <Link className={styles.link} href={href} target="_blank">
                <div className={styles.buttonFlex}>
                    <div className={styles.buttonText}>{text}</div>
                    <div className={styles.imageDiv}>
                        <img className={styles.buttonImg} src={imgSrc} alt=""></img>
                    </div>
                </div>
        </Link>
    )
}