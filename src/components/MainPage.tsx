import styles from '../styles/MainPage.module.css';
import MainPageImageMobile from './mobile/UIMobile/MainPageImageMobile';
import MainPageTextMobile from './mobile/UIMobile/MainPageTextMobile';
import MainPageImage from './UI/MainPageImage';
import RewindButton from './UI/RewindButton';

export default function MainPage() {
  return (
    <div className={styles.mainFlexDiv}>
        <div className={styles.textDiv}>
            <div className={styles.h1TextDiv}>
                <h1>Hi, I'm <br></br> Roslyakov Pavel</h1>
            </div>
            <div className={styles.h2TextDiv}>
                <h2>I'm .NET Backend Developer</h2>
            </div>
            <div className={styles.h3TextDiv}>
                <h3>I develop a Backend for web applications and I also develop and build microservices.</h3>
            </div>
            <div className={styles.buttonDiv}>
                <RewindButton href={'../../static/pdf/Resume.pdf'} text={'Resume'} imgSrc={'../../static/images/DownloadIcon.svg'}></RewindButton>
            </div>
        </div>
        <MainPageTextMobile></MainPageTextMobile>
        <div className={styles.imageDiv}>
            <section>
                <MainPageImage></MainPageImage>
                <MainPageImageMobile></MainPageImageMobile>
            </section>
        </div>
    </div>
  )
}