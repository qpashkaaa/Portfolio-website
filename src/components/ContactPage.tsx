import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/ContactPage.module.css';
import ContactCard from "./UI/ContactCard";

export default function ContactPage() {
  return (
    <PagePartBackground className={''} id={'contactWithMe'}
            bgText={'Contacts'}
            supportText={'CONTACT ME'}
            mainText={'Contacts'}
            bgColor={'#181A21'}>
        <div className={styles.mainDiv}>
            <ContactCard></ContactCard>
        </div>
    </PagePartBackground>
  )
}