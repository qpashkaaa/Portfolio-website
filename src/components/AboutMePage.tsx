import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/AboutMePage.module.css';
import Link from "next/link";

export default function AboutMePage() {
  return (
    <PagePartBackground className={''} id ={'aboutMe'} bgText = {'About me'} supportText={''} mainText={''} bgColor={''}>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <img className={styles.leftDivImg} src="../../static/images/AboutMeLeftImage.svg" alt=""></img>
        </div>
        <div className={styles.centerDiv}></div>
        <div className={styles.rightDiv}>
          <div className={styles.firstRightDivText}>A LITTLE BIT ABOUT ME</div>
          <div className={styles.secondRightDivText}>.NET Backend Developer</div>
          <div className={styles.thirdRightDivText}></div>
          <div className={styles.fourthRightDivText}>Hi. My name is Pavel. I am a .NET Developer. I have been commercial commercial development experience is about 3+ years.</div>
          <div className={styles.fifthRightDivText}>I am considering incoming job offers mainly for the .NET Developer. I expect to receive new, useful and relevant skills from a new job, develop myself as a specialist and raise my level.</div>
          <div className={styles.sixthRightFlexDiv}>
              <div className={styles.sixthRightFlexDivLeftInfo}>
                <div>Date of birth :</div>
                <div>Location :</div>
                <div>Languages :</div>
                <div>Experience :</div>
                <div>Email :</div>
                <div>Telegram :</div>
                <div>GitHub :</div>
                <div>LinkedIn :</div>
              </div>
              <div className={styles.sixthRightFlexDivRightInfo}>
              <div>11.08.2002</div>
                <div>Tambov, Russia</div>
                <div>Russian, English</div>
                <div>3+ years</div>
                <div>pvl.roslyakov@gmail.com</div>
                <div><Link className={styles.link} href='https://t.me/qpashkaaa' target="_blank">t.me/qpashkaaa</Link></div>
                <div><Link className={styles.link} href='https://github.com/qpashkaaa' target="_blank">github.com/qpashkaaa</Link></div>
                <div><Link className={styles.link} href='https://www.linkedin.com/in/pavel-roslyakov-7b303928b/' target="_blank">linkedin.com/in/pavel-roslyakov-7b303928b</Link></div>
              </div>
          </div>
        </div>
      </div>
    </PagePartBackground>
  )
}