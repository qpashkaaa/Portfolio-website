import Link from 'next/link';
import styles from '../../styles/FooterSocialLinkButton.module.css';

export default function FooterSocialLinkButton({ href, imgSrc }) {
  return (
    <Link className={styles.link} href={href} target={'_blank'}>
      <div className={styles.mainDiv}>
        <img src={imgSrc} alt=""></img>
      </div>
    </Link>
  )
}