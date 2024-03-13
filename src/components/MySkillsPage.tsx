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
      bgText={'My skills'}
      supportText={'MY SKILLS'}
      mainText={'My skills'}
      bgColor={'#181A21'}>
      <div className={styles.mainDiv}>
        <div className={styles.arrowDiv}>
          <ArrowButtons clickBack={BackPage} clickForward={ForwardPage}></ArrowButtons>
        </div>
        <div className={page === 1 ? styles.cardsDiv : styles.cardsDivUnactive}>
        <SkillCard number={'01'}
            imgSrc={'../../static/images/WebSiteSkillCardImage.svg'}
            mainText={'Web Application Development'}
            supportText={'Backend development for web applications using ASP.NET / Development of microservices.'}
            theme={'light'}></SkillCard>
          <SkillCard number={'02'}
            imgSrc={'../../static/images/DesktopSkillCardImage.svg'}
            mainText={'Desktop Application Development'}
            supportText={'Application development on the platform .NET (WPF, WinForms) for specific tasks.'}
            theme={'dark'}></SkillCard>
          <SkillCard number={'03'}
            imgSrc={'../../static/images/DatabaseSkillCardImage.svg'}
            mainText={'Working with databases'}
            supportText={'Experience working with more than 7 SQL and NoSQL databases.'}
            theme={'dark'}></SkillCard>
        </div>
        <div className={page === 2 ? styles.cardsDiv : styles.cardsDivUnactive}>
          <SkillCard number={'04'}
            imgSrc={'../../static/images/MobileSkillCardImage.svg'}
            mainText={'Mobile application development'}
            supportText={'Mobile application development using Xamarin and Kotlin.'}
            theme={'light'}></SkillCard>
          <SkillCard number={'05'}
            imgSrc={'../../static/images/DesignSkillCardImage.svg'}
            mainText={'Creating designs'}
            supportText={'Website design development in Figma.'}
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