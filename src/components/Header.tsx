import A from "./UI/A";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.desktopUl}>
                <li>
                    <A href={'#aboutMe'} text={'About me'}></A>
                </li>
                <li>
                    <A href={'#mySkills'} text={'My skills'}></A>
                </li>
                <li>
                    <A href={'#myPortfolio'} text={'Portfolio'}></A>
                </li>
                <li>
                    <A href={'#contactWithMe'} text={'Contacts'}></A>
                </li>
            </ul>
        </header>
    )
}