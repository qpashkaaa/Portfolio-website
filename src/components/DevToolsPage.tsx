import { useState } from "react";
import PagePartBackground from "./UI/PagePartBackground";
import ArrowButtons from "./UI/ArrowButtons";
import styles from '../styles/DevToolsPage.module.css';
import DevToolCard from "./UI/DevToolCard";

export default function DevToolsPage() {
    const maxPage = 6;
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
        <PagePartBackground className={styles.pagePartBackground}
                            id ={''}
                            bgText={'Tech Stack'}
                            supportText={'2+ YEARS OF DEVELOPMENT'}
                            mainText={'Tech Stack'}
                            bgColor={''}>
            <div id={'devTools'} className={styles.mainDiv}>
                <div className={styles.arrowDiv}>
                    <ArrowButtons clickBack={BackPage} clickForward={ForwardPage}></ArrowButtons>
                </div>
                <section className={page === 1 ? styles.cardsDiv : styles.cardsDivUnactive}>
                <div className={styles.headerCardsSection}>Technologies</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'.NET Core'} percentage={100}></DevToolCard>
                        <DevToolCard devTool={'ASP.NET'} percentage={100}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Microservices'} percentage={90}></DevToolCard>
                        <DevToolCard devTool={'IIS Express'} percentage={90}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Entity Framework'} percentage={80}></DevToolCard>
                        <DevToolCard devTool={'SQL'} percentage={80}></DevToolCard>
                    </div>
                </section>
                <section className={page === 2 ? styles.cardsDiv : styles.cardsDivUnactive}>
                <div className={styles.headerCardsSection}>Databases</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'MongoDB'} percentage={100}></DevToolCard>
                        <DevToolCard devTool={'PostgreSQL'} percentage={100}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'MS SQL'} percentage={90}></DevToolCard>
                        <DevToolCard devTool={'Oracle Database'} percentage={90}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'ClickHouse'} percentage={80}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                </section>
                <section className={page === 3 ? styles.cardsDiv : styles.cardsDivUnactive}>
                <div className={styles.headerCardsSection}>Development Tools</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Git'} percentage={100}></DevToolCard>
                        <DevToolCard devTool={'Docker'} percentage={100}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Jira'} percentage={100}></DevToolCard>
                        <DevToolCard devTool={'BitBucket'} percentage={100}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Confluence'} percentage={90}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                </section>
                <section className={page === 4 ? styles.cardsDiv : styles.cardsDivUnactive}>
                <div className={styles.headerCardsSection}>Web development</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'HTML'} percentage={100}></DevToolCard>
                        <DevToolCard devTool={'CSS'} percentage={100}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'ASP.NET API'} percentage={100}></DevToolCard>
                        <DevToolCard devTool={'ASP.NET MVC'} percentage={100}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'ReactJS'} percentage={90}></DevToolCard>
                        <DevToolCard devTool={'NextJS'} percentage={90}></DevToolCard>
                    </div>
                </section>
                <section className={page === 5 ? styles.cardsDiv : styles.cardsDivUnactive}>
                <div className={styles.headerCardsSection}>Mobile development</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Xamarin'} percentage={70}></DevToolCard>
                        <DevToolCard devTool={'Kotlin'} percentage={70}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                </section>
                <section className={page === 6 ? styles.cardsDiv : styles.cardsDivUnactive}>
                <div className={styles.headerCardsSection}>Other skills</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Figma'} percentage={90}></DevToolCard>
                        <DevToolCard devTool={'Excel'} percentage={90}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Photoshop'} percentage={70}></DevToolCard>
                        <DevToolCard devTool={'Sony Vegas'} percentage={70}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Blender'} percentage={50}></DevToolCard>
                    </div>
                </section>
            </div>
        </PagePartBackground>
    )
}