import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/ResumePage.module.css';
import ResumeSection from "./UI/ResumeSection";
import ResumeCard from "./UI/ResumeCard";

export default function ResumePage() {
    return (
        <PagePartBackground className={''} id={'myResume'}
            bgText={'Резюме'}
            supportText={'ОПЫТ & ОБРАЗОВАНИЕ'}
            mainText={'Резюме'}
            bgColor={''}>
            <div className={styles.mainDiv}>
                <ResumeSection headText={'Образование'}>
                    <ResumeCard mainText={'Кафедра САПР(Бакалавриат)'} supportText={'ТГТУ, Тамбов'} rangeOfYears={'2022 - н.в.'}></ResumeCard>
                    <ResumeCard mainText={'Техник-программист(СПО)'} supportText={'МК ТГТУ, Тамбов'} rangeOfYears={'2018 - 2022'}></ResumeCard>
                </ResumeSection>
                <ResumeSection headText={'Опыт'}>
                    <ResumeCard mainText={'ООО Техсервис'} supportText={'Тамбов'} rangeOfYears={'2021 - 2022'}></ResumeCard>
                </ResumeSection>
            </div>
        </PagePartBackground>
    )
}