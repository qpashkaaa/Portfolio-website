import styles from '../../styles/PortfolioCard.module.css';
import PortfolioCardButton from './PortfolioCardButton';

export default function PortfolioCard({shortDescription, imgSrc, firstButtonText, firstHref, showSecondButton, secondHref}) {
  var plugElement = false;
  if (shortDescription =="" && imgSrc =="" && firstHref =="" && showSecondButton == false && secondHref ==""){
    plugElement = true;
  }

  var secondButtonDisplay = 'none';
  if (showSecondButton == true){
    secondButtonDisplay = 'block';
  }
  return (
    <div className={plugElement === true ? `outherDivPlug` : styles.outherDiv}>
        <div className={styles.bgLinkAndDescDiv}></div>
        <div className={styles.linkAndDescDiv}>
          <div className={styles.descDiv}>{shortDescription}</div>
          <div className={styles.linkDiv}>
              <PortfolioCardButton text={firstButtonText} href={firstHref}></PortfolioCardButton>
            <div className={`secondButton`}>
              <PortfolioCardButton text={firstButtonText === 'Demo' ? 'Code' : 'Demo'} href={secondHref}></PortfolioCardButton>
            </div>
          </div>
        </div>
        <div className={plugElement === true ? `imgDivPlug` : styles.imgDiv}>
            <img className={styles.cardImg} src={imgSrc} alt=''></img>
        </div>
        <style jsx>{`
        .secondButton {
          display: ${secondButtonDisplay};
        }
        .outherDivPlug{
          display: flex;
          width: 500px;
          height: 350px;
          background-color: #181A21;
          padding: 10px 20px;
          align-items: center;
        }
        .imgDivPlug{
          display:none;
        }
      `}</style>
    </div>
  )
}