import styles from '../../styles/SkillCard.module.css';

export default function SkillCard({ number, imgSrc, mainText, supportText, theme }) {
    var visibility = 'visible';
    var bgColor : string;
    var imgColor : string;
    var mainTextColor : string;
    var numberAndSupportTextColor : string = '#AFAFAF';
    if (theme == "dark"){
        bgColor = '#0F1117';
        // white color for svg img changed with css
        imgColor = 'invert(100%) sepia(0%) saturate(3152%) hue-rotate(12deg) brightness(115%) contrast(107%)';
        mainTextColor = '#FFFFFF';
    }
    if (theme == "light"){
        bgColor = '#FFFFFF';
        // white color for svg img changed with css
        imgColor = 'invert(4%) sepia(4%) saturate(5419%) hue-rotate(187deg) brightness(92%) contrast(93%)';
        mainTextColor = '#000000';
    }
    if (number == '' && imgSrc == '' && mainText == '' && supportText == '' && theme =='')
        visibility = 'collapse';
    return (
        <div className={`mainFlex ${styles.mainFlex}`}>
            <div className={`numberDiv ${styles.numberDiv}`}>{number}</div>
            <div className={styles.imageDiv}>
                <img className={`cardImg ${styles.cardImg}`} src={imgSrc} alt=""></img>
            </div>
            <div className={`mainTextDiv ${styles.mainTextDiv}`}>{mainText}</div>
            <div className={`supportTextDiv ${styles.supportTextDiv}`}>{supportText}</div>
            <style jsx>{`
                .mainFlex {
                    visibility: ${visibility};
                    background: ${bgColor};
                }
                .numberDiv {
                    -webkit-text-stroke: 2px ${numberAndSupportTextColor};
                    color: ${bgColor};
                }
                .cardImg {
                    filter: ${imgColor};
                    background: transparent;
                    width: 81px;
                    height: 81px; 
                }
                .mainTextDiv {
                    color: ${mainTextColor};
                }
                .supportTextDiv {
                    color: ${numberAndSupportTextColor};
                }
                @media only screen and (max-width : 1634px) {
                    .cardImg{
                        width: 60px;
                        height: 60px;
                    }
                }
                @media only screen and (max-width : 480px) {
                    .cardImg{
                        width: 50px;
                        height: 50px;
                    }
                }                 
            `}</style>
        </div>
    )
}