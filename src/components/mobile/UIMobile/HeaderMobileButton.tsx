import Link from 'next/link';
import { useState } from 'react';
import styles from '../../../styles/mobile/HeaderMobileButton.module.css';

export default function HeaderMobileButton({ href, btnText, onClick}) {

    return (
        <Link className={styles.link} href = {href} onClick={onClick}>
            <div className={styles.mainFlex}>{btnText}</div>
        </Link>
    )
}