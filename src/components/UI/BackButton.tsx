import { useEffect, useState } from 'react'
import styles from '../../styles/BackButton.module.css'

export default function BackButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY>1000){
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp =() =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
        window.history.replaceState(null, '', window.location.pathname);
    }

  return (
        <div className={backToTopButton === true ? styles.button : styles.hideButton} onClick={scrollUp}>
            <img src='../../static/images/TopArrowBlack.svg'></img>
        </div>
  )
}
