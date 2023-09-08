import { useState } from "react";
import PagePartBackground from "./UI/PagePartBackground";
import ArrowButtons from "./UI/ArrowButtons";
import styles from '../styles/DevToolsPage.module.css';
import DevToolCard from "./UI/DevToolCard";

export default function DevToolsPage() {
    const maxPage = 7;
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
                            bgText={'Инструменты'}
                            supportText={'1+ ГОД РАЗРАБОТКИ'}
                            mainText={'Инструменты разработки'}
                            bgColor={''}>
            <div id={'devTools'} className={styles.mainDiv}>
                <div className={styles.arrowDiv}>
                    <ArrowButtons clickBack={BackPage} clickForward={ForwardPage}></ArrowButtons>
                </div>
                <section className={page === 1 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>Языки программирования</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'C#'} percentage={80}></DevToolCard>
                        <DevToolCard devTool={'C++'} percentage={50}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'JavaScript'} percentage={85}></DevToolCard>
                        <DevToolCard devTool={'TypeScript'} percentage={85}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'PHP'} percentage={60}></DevToolCard>
                        <DevToolCard devTool={'SQL'} percentage={85}></DevToolCard>
                    </div>
                </section>
                <section className={page === 2 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>СУБД</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'MySQL'} percentage={85}></DevToolCard>
                        <DevToolCard devTool={'PostgreSQL'} percentage={70}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'OracleDatabase'} percentage={80}></DevToolCard>
                        <DevToolCard devTool={'MongoDB'} percentage={65}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                </section>
                <section className={page === 3 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>Инструменты разработки</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Git'} percentage={85}></DevToolCard>
                        <DevToolCard devTool={'Docker'} percentage={70}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Nginx'} percentage={65}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                </section>
                <section className={page === 4 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>Фреймворки</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'WPF(MVVM)'} percentage={80}></DevToolCard>
                        <DevToolCard devTool={'WinForms'} percentage={85}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'EntityFramework'} percentage={80}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                        <DevToolCard devTool={''} percentage={0}></DevToolCard>
                    </div>
                </section>
                <section className={page === 5 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>Web-разработка</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'HTML'} percentage={70}></DevToolCard>
                        <DevToolCard devTool={'CSS'} percentage={70}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'ReactJS'} percentage={80}></DevToolCard>
                        <DevToolCard devTool={'NextJS'} percentage={80}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'ASP.Net'} percentage={75}></DevToolCard>
                    </div>
                </section>
                <section className={page === 6 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>Мобильная разработка</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'ReactNative'} percentage={65}></DevToolCard>
                        <DevToolCard devTool={'Kotlin'} percentage={45}></DevToolCard>
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
                <section className={page === 7 ? styles.cardsDiv : styles.cardsDivUnactive}>
                    <div className={styles.headerCardsSection}>Прочие навыки</div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Figma'} percentage={85}></DevToolCard>
                        <DevToolCard devTool={'Excel'} percentage={95}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Photoshop'} percentage={65}></DevToolCard>
                        <DevToolCard devTool={'Sony Vegas'} percentage={65}></DevToolCard>
                    </div>
                    <div className={styles.cardsRow}>
                        <DevToolCard devTool={'Blender'} percentage={50}></DevToolCard>
                    </div>
                </section>
            </div>
        </PagePartBackground>
    )
}