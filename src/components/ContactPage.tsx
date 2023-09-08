import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/ContactPage.module.css';
import ContactCard from "./UI/ContactCard";

export default function ContactPage() {
  return (
    <PagePartBackground className={''} id={'contactWithMe'}
            bgText={'Контакты'}
            supportText={'СВЯЖИТЕСЬ СО МНОЙ'}
            mainText={'Контакты'}
            bgColor={'#181A21'}>
        <div className={styles.mainDiv}>
            <ContactCard></ContactCard>
        </div>
    </PagePartBackground>
  )
}