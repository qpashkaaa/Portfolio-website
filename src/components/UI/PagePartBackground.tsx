import styles from '../../styles/PagePartBackground.module.css';

export default function PagePartBackground({className, id, bgText, supportText, mainText, bgColor, children }) {
  if (bgColor == "") {
    bgColor = "transparent";
  }
  return (
    <div id = {id} className = {`${className} ${styles.wrapperDiv}`}>
      <div className={`bgDiv ${styles.bgDiv}`}>
        <div className={styles.headerTextDiv}>{bgText}</div>
      </div>
      <div className={styles.supportTextDiv}>{supportText}</div>
      <div className={styles.mainTextDiv}>{mainText}</div>
      <div className={`bgContentDiv ${styles.contentDiv}`}>
        {children}
      </div>
      <style jsx>{`
        .bgDiv {
          background: ${bgColor};
          box-shadow: 1600px 0 0 0 ${bgColor}, -1600px 0 0 0 ${bgColor};
        }
        .bgContentDiv{
          background: ${bgColor};
          box-shadow: 1600px 0 0 0 ${bgColor}, -1600px 0 0 0 ${bgColor};
        }
        @media only screen and (max-width : 1634px) {
          .bgDiv {
            box-shadow: 1200px 0 0 0 ${bgColor}, -1200px 0 0 0 ${bgColor};
          }
          .bgContentDiv{
            background: ${bgColor};
            box-shadow: 1200px 0 0 0 ${bgColor}, -1200px 0 0 0 ${bgColor};
          }
        }
        @media only screen and (max-width : 992px) {
          #${id}
          { 
            scroll-margin-top: 50px; 
          }
        } 
        @media only screen and (max-width : 768px) {
          .bgDiv{
            padding: 4vh 0;
          }
        } 
      `}</style>
    </div>
  )
}