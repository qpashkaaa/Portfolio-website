import styles from '../../styles/mobile/MySkillsPageMobile.module.css';
import PagePartBackground from "../UI/PagePartBackground";
import SkillCard from "../UI/SkillCard";

export default function MySkillsPageMobile() {
  return (
    <PagePartBackground className={styles.pagePartBackground} id={'mySkills_mobile'}
      bgText={'My skills'}
      supportText={'MY SKILLS'}
      mainText={'My skills'}
      bgColor={'#181A21'}>
      <div className={styles.mainDiv}>
        <div className={styles.cardsDiv}>
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
        </div>
      </div>
    </PagePartBackground>
  )
}