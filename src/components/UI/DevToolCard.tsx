import { useState, useEffect } from 'react';
import styles from '../../styles/DevToolCard.module.css';

export default function DevToolCard({devTool, percentage}) {
    // 700px - 100% fill div
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    
    useEffect(() =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener('resize', ()=> {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    })
  }, [])

    var cardWidth = 0;
    if (windowSize.width <= 480){
      cardWidth = windowSize.width * 0.92;
    }
    else if (windowSize.width <= 768){
      cardWidth = windowSize.width * 0.41;
    }
    else if (windowSize.width <= 992){
      cardWidth = windowSize.width * 0.42;
    }
    else if (windowSize.width <= 1200){
      cardWidth = windowSize.width * 0.46;
    }
    else if (windowSize.width <= 1634){
      cardWidth = 570;
    }
    else{
      cardWidth = 700;
    }

    var fillPercentageWidth = cardWidth * (percentage / 100);

    var percentageVisibility = 'block';
    if (fillPercentageWidth < 70){
        percentageVisibility = 'none';
    }
    var cardVisibility = 'visible';
    if (devTool == '' && percentage == 0){
      cardVisibility = 'collapse';
    }
  return (
    <div className={`outherDiv ${styles.outherDiv}`}>
        <div className={`innerFlexDiv ${styles.innerFlexDiv}`}>
            <div className={styles.textDiv}>{devTool}</div>
            <div className={`percentageDiv ${styles.percentageDiv}`}>{percentage}%</div>
        </div>
        <style jsx>{`
        .outherDiv{
          width: ${cardWidth}px;
          visibility: ${cardVisibility};
        }
        .innerFlexDiv {
          width: ${fillPercentageWidth}px;
        }
        .percentageDiv{
            display: ${percentageVisibility};
        }
      `}</style>
    </div>
  )
}