import FooterSocialLinkButton from '@/components/UI/FooterSocialLinkButton';
import styles from '../../../styles/mobile/MainPageTextMobile.module.css';

export default function MainPageTextMobile() {
    return (
        <>
            <div className={styles.container}></div>
            <div className={styles.innerContainer}>
                <div className={styles.socialLinks}>
                    <FooterSocialLinkButton href={'../../../../static/pdf/Resume.pdf'} imgSrc={'../../static/images/ResumeImage.svg'}></FooterSocialLinkButton>
                    <FooterSocialLinkButton href={'https://www.linkedin.com/in/pavel-roslyakov-7b303928b/'} imgSrc={'../../static/images/LinkedInImage.svg'}></FooterSocialLinkButton>
                    <FooterSocialLinkButton href={'https://t.me/qpashkaaa'} imgSrc={'../../static/images/TelegramImage.svg'}></FooterSocialLinkButton>
                </div>
                <div className={styles.textDiv}>
                    <div className={styles.hiDiv}>Hi, I'm</div>
                    <div className={styles.nameDiv}>Roslyakov Pavel</div>
                    <div className={styles.supportInfoDiv}>.NET Backend Developer</div>
                </div>
            </div>
        </>
    )
}