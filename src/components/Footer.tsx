import styles from '../styles/Footer.module.css';
import FooterSocialLinkButton from './UI/FooterSocialLinkButton';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.contactDiv}>
            <div className={styles.supportMessageHeader}>Contact</div>
            <div className={styles.supportMessage}>pvl.roslyakov@gmail.com</div>
            <div className={styles.socialLinksButton}>
                <FooterSocialLinkButton href={'https://t.me/qpashkaaa'} imgSrc={'../../static/images/TelegramImage.svg'}></FooterSocialLinkButton>
                <FooterSocialLinkButton href={'https://www.linkedin.com/in/pavel-roslyakov-7b303928b/'} imgSrc={'../../static/images/LinkedInImage.svg'}></FooterSocialLinkButton>
                <FooterSocialLinkButton href={'https://github.com/qpashkaaa'} imgSrc={'../../static/images/GitHubImage.svg'}></FooterSocialLinkButton>
            </div>
        </div>
        <div className={styles.locationDiv}>
            <div className={styles.supportMessageHeader}>Location</div>
            <div className={styles.supportMessage}>Moscow, Russia</div>
        </div>
    </footer>
  )
}