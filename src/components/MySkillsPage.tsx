import ArrowButtons from "./UI/ArrowButtons";
import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/MySkillsPage.module.css';
import SkillCard from "./UI/SkillCard";
import { useState, useEffect } from "react";

export default function MySkillsPage() {
  const maxPage = 2;
  const [page, setPage] = useState(1);
  function BackPage() {
    if (page - 1 != 0)
      setPage(page - 1);
  }
  function ForwardPage() {
    if (page + 1 <= maxPage)
      setPage(page + 1);
  }

  return (
    <PagePartBackground className={styles.pagePartBackground} id={'mySkills'}
      bgText={'Мои навыки'}
      supportText={'НАВЫКИ, КОТОРЫМИ Я ОБЛАДАЮ'}
      mainText={'Мои навыки'}
      bgColor={'#181A21'}>
      <div className={styles.mainDiv}>
        <div className={styles.arrowDiv}>
          <ArrowButtons clickBack={BackPage} clickForward={ForwardPage}></ArrowButtons>
        </div>
        <div className={page === 1 ? styles.cardsDiv : styles.cardsDivUnactive}>
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
        </div>
        <div className={page === 2 ? styles.cardsDiv : styles.cardsDivUnactive}>
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
          <SkillCard number={''}
            imgSrc={''}
            mainText={''}
            supportText={''}
            theme={''}></SkillCard>
        </div>
      </div>
    </PagePartBackground>
  )
}