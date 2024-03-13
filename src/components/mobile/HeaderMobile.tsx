import { useState } from 'react';
import styles from '../../styles/mobile/HeaderMobile.module.css';
import HeaderMobileButton from './UIMobile/HeaderMobileButton';

export default function HeaderMobile() {
    const [headerChecked, setHeaderChecked] = useState(false);

    function ChangeHeaderChecked(){
        headerChecked === false ?
            setHeaderChecked(true) :
            setHeaderChecked(false)
    }

    function SelectedTab(){
        setTimeout(()=> setHeaderChecked(false), 350)
    }

    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.navbar}>
                    <div className={`${styles.container} ${styles.navContainer}`}>
                        <input className={styles.checkbox} type="checkbox" name="" id="" checked={headerChecked} onChange={ChangeHeaderChecked} />
                        <div className={styles.hamburgerLines}>
                            <span className={`${styles.line} ${styles.line1}`}></span>
                            <span className={`${styles.line} ${styles.line2}`}></span>
                            <span className={`${styles.line} ${styles.line3}`}></span>
                        </div>
                        <div className={styles.menuItems}>
                            <HeaderMobileButton href={'#aboutMe'} btnText={'About me'} onClick={SelectedTab}/>
                            <HeaderMobileButton href={'#mySkills_mobile'} btnText={'My skills'} onClick={SelectedTab}/>
                            <HeaderMobileButton href={'#myPortfolio'} btnText={'Portfolio'} onClick={SelectedTab}/>
                            <HeaderMobileButton href={'#contactWithMe'} btnText={'Contacts'} onClick={SelectedTab}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}