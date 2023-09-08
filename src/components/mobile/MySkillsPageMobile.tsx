import styles from '../../styles/mobile/MySkillsPageMobile.module.css';
import PagePartBackground from "../UI/PagePartBackground";
import SkillCard from "../UI/SkillCard";
import { useState, useEffect } from "react";

export default function MySkillsPageMobile() {
  return (
    <PagePartBackground className={styles.pagePartBackground} id={'mySkills_mobile'}
      bgText={'Мои навыки'}
      supportText={'НАВЫКИ, КОТОРЫМИ Я ОБЛАДАЮ'}
      mainText={'Мои навыки'}
      bgColor={'#181A21'}>
      <div className={styles.mainDiv}>
        <div className={styles.cardsDiv}>
          <SkillCard number={'01'}
            imgSrc={'../../static/images/WebSiteSkillCardImage.svg'}
            mainText={'Разработка веб-приложений'}
            supportText={'Разработка FullStack Web-приложений(React / Next.js + ASP.Net) под конкретные задачи'}
            theme={'light'}></SkillCard>
          <SkillCard number={'02'}
            imgSrc={'../../static/images/DesktopSkillCardImage.svg'}
            mainText={'Разработка Desktop-приложений'}
            supportText={'Разработка приложений на платформе .Net(WPF, WinForms) под конкретные задачи'}
            theme={'dark'}></SkillCard>
          <SkillCard number={'03'}
            imgSrc={'../../static/images/DatabaseSkillCardImage.svg'}
            mainText={'Работа с базами данных'}
            supportText={'Опыт работы более чем с 5 SQL и NoSQL СУБД.'}
            theme={'dark'}></SkillCard>
            <SkillCard number={'04'}
            imgSrc={'../../static/images/MobileSkillCardImage.svg'}
            mainText={'Разработка мобильных приложений'}
            supportText={'Разработка мобильных приложений с использованием React Native'}
            theme={'light'}></SkillCard>
          <SkillCard number={'05'}
            imgSrc={'../../static/images/DesignSkillCardImage.svg'}
            mainText={'Создание дизайнов'}
            supportText={'Разработка дизайнов веб-сайтов в Figma'}
            theme={'dark'}></SkillCard>
        </div>
      </div>
    </PagePartBackground>
  )
}