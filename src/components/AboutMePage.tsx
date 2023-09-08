import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/AboutMePage.module.css';
import Link from "next/link";
import RewindButton from "./UI/RewindButton";

export default function AboutMePage() {
  return (
    <PagePartBackground className={''} id ={'aboutMe'} bgText = {'О себе'} supportText={''} mainText={''} bgColor={''}>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <img className={styles.leftDivImg} src="../../static/images/AboutMeLeftImage.svg" alt=""></img>
        </div>
        <div className={styles.centerDiv}></div>
        <div className={styles.rightDiv}>
          <div className={styles.firstRightDivText}>НЕМНОГО ОБО МНЕ</div>
          <div className={styles.secondRightDivText}>Junior разработчик</div>
          <div className={styles.thirdRightDivText}>Который стремится к большему...</div>
          <div className={styles.fourthRightDivText}>Привет! Я Росляков Павел. Я C# Junior Developer. Мечтаю развиваться в данном направлении и создавать качественные продукты.</div>
          <div className={styles.fifthRightDivText}>Мной изучается множество сторон разработки, такие как: Backend, Frontend, Desktop, Mobile. Но основные силы направлены на изучение C# Backend для Web-приложений.</div>
          <div className={styles.sixthRightFlexDiv}>
              <div className={styles.sixthRightFlexDivLeftInfo}>
                <div>Дата рождения :</div>
                <div>Местоположение :</div>
                <div>Языки :</div>
                <div>Опыт :</div>
                <div>Email :</div>
                <div>Telegram :</div>
                <div>GitHub :</div>
              </div>
              <div className={styles.sixthRightFlexDivRightInfo}>
              <div>11.08.2002</div>
                <div>Tambov, Russia</div>
                <div>Russian, English</div>
                <div>1+ год</div>
                <div>qpashkaaa@gmail.com</div>
                <div><Link className={styles.link} href='https://t.me/qpashkaaa' target="_blank">t.me/qpashkaaa</Link></div>
                <div><Link className={styles.link} href='https://github.com/qpashkaaa' target="_blank">github.com/qpashkaaa</Link></div>
              </div>
          </div>
        </div>
      </div>
    </PagePartBackground>
  )
}