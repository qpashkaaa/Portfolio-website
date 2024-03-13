import PagePartBackground from "./UI/PagePartBackground";
import styles from '../styles/ResumePage.module.css';
import ResumeSection from "./UI/ResumeSection";
import ResumeCard from "./UI/ResumeCard";

export default function ResumePage() {
    return (
        <PagePartBackground className={''} id={'myResume'}
            bgText={'Resume'}
            supportText={'EXPERIENCE & EDUCATION'}
            mainText={'Resume'}
            bgColor={''}>
            <div className={styles.mainDiv}>
                <ResumeSection headText={'Education'}>
                    <ResumeCard mainText={'Bachelor of CAD Department'} supportText={'TSTU, Tambov'} rangeOfYears={'2022 - Currently'}></ResumeCard>
                    <ResumeCard mainText={'Programmer technician'} supportText={'MK TSTU, Tambov'} rangeOfYears={'2018 - 2022'}></ResumeCard>
                </ResumeSection>
                <ResumeSection headText={'Experience'}>
                    <ResumeCard mainText={'Hybrid.ai'} supportText={'Tambov'} rangeOfYears={'2023 - Currently'}></ResumeCard>
                    <ResumeCard mainText={'Techservice LLC'} supportText={'Tambov'} rangeOfYears={'2021 - 2022'}></ResumeCard>
                </ResumeSection>
            </div>
        </PagePartBackground>
    )
}