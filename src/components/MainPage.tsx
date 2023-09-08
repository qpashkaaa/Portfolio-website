import { Main } from 'next/document';
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
                <h1>Привет! Я <br></br> Росляков Павел</h1>
            </div>
            <div className={styles.h2TextDiv}>
                <h2>Я Web-разработчик</h2>
            </div>
            <div className={styles.h3TextDiv}>
                <h3>Занимаюсь Backend, Frontend, Desktop, Mobile разработкой. Основное направление - Backend для Web-приложений на языке программирования C#. </h3>
            </div>
            <div className={styles.buttonDiv}>
                <RewindButton href={'../../static/pdf/Resume.pdf'} text={'Резюме'} imgSrc={'../../static/images/DownloadIcon.svg'}></RewindButton>
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