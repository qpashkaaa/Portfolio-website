import A from "./UI/A";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.desktopUl}>
                <li>
                    <A href={'#aboutMe'} text={'О себе'}></A>
                </li>
                <li>
                    <A href={'#mySkills'} text={'Мои навыки'}></A>
                </li>
                <li>
                    <A href={'#myPortfolio'} text={'Портфолио'}></A>
                </li>
                <li>
                    <A href={'#contactWithMe'} text={'Контакты'}></A>
                </li>
            </ul>
        </header>
    )
}