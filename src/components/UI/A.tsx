import Link from "next/link";
import styles from "../../styles/A.module.css";

export default function A({ text, href }) {
    return (
        <div className={styles.dotUnder}>
            <Link className={styles.link} href={href}>{text}</Link>
            <div>
                <span>
                    <span>
                    </span>
                </span>
            </div>
        </div>
    )
}