import PagePartBackground from "./UI/PagePartBackground";
import PortfolioCard from "@/components/UI/PortfolioCard";
import PortfolioHeader from "./UI/PortfolioHeader";
import ArrowButtons from "./UI/ArrowButtons";
import React, { useState,useEffect } from "react";
import styles from '../styles/PortfolioPage.module.css';
import PortfolioCards from '../../public/static/json/PortfolioCards.json';

export default function PortfolioPage() {

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

  var countElementsInRow = 0;

  if (windowSize.width <= 992){
    countElementsInRow = 1;
  }
  else if (windowSize.width <= 1634){
    countElementsInRow = 2;
  }
  else{
    countElementsInRow = 3;
  }

  let maxPage = 0;
  const [page, setPage] = useState(0);
  function BackPage() {
    if (page - 1 != 0)
      setPage(page - 1);
  }
  function ForwardPage() {
    if (page + 1 <= maxPage)
      setPage(page + 1);
  }

  const [tab, setTab] = useState(1);

  const componentArray = [];
  const formComponents = (tab) => {
    // preliminary selection from the array
    let portfolioCardsSelectedCategory = [];
    PortfolioCards.forEach((d) => {
      if (tab === 1){
        portfolioCardsSelectedCategory.push(d)
      }
      else{
        if (d.type == 'Desktop'){
          if (tab === 2)
          portfolioCardsSelectedCategory.push(d)
        }
        else if (d.type == 'Mobile'){
          if (tab === 3)
          portfolioCardsSelectedCategory.push(d)
        }
        else if (d.type == 'Website'){
          if (tab === 4)
          portfolioCardsSelectedCategory.push(d)
        }
      }
    })

    // add empty elements so that there are no jumps in the height of the block
    if (portfolioCardsSelectedCategory.length === 0 && countElementsInRow != 1 && (portfolioCardsSelectedCategory.length % countElementsInRow) != 0){
      for (let i = 0; i <3;i++){
        portfolioCardsSelectedCategory.push({
          "id": 0,
          "type": "",
          "shortDescription":"",
          "imgSrc":"",
          "firstHref":"",
          "addCodeButton":false,
          "secondHref":""
        })
      }
    }

    maxPage = Math.ceil(portfolioCardsSelectedCategory.length / countElementsInRow);

    // if we have 2 element's on page, need will add one plug element, for normal display in row(not high space-between)
    if ((portfolioCardsSelectedCategory.length % countElementsInRow) == countElementsInRow - 1 && (portfolioCardsSelectedCategory.length % countElementsInRow) != 0){
      portfolioCardsSelectedCategory.push({
        "id": 0,
        "type": "",
        "shortDescription":"",
        "imgSrc":"",
        "firstHref":"",
        "addCodeButton":false,
        "secondHref":""
      })
    }

    // show the category of selected items
    portfolioCardsSelectedCategory.forEach((d, i) => {
        let index = Math.floor(i / countElementsInRow);
        componentArray[index] = [
          ...(componentArray[index] || []),
          <PortfolioCard key={d.id}
            shortDescription={d.shortDescription}
            imgSrc={d.imgSrc}
            firstButtonText={d.firstButtonText}
            firstHref={d.firstHref}
            showSecondButton={d.addCodeButton}
            secondHref={d.secondHref}></PortfolioCard>
        ];
    });
    return componentArray;
  };
  
  // this code section need for activate keyframe css animation
  if (page === 0){
    setTimeout(ForwardPage, 0.0001)
  }
  
  return (
    <PagePartBackground className={'pagePartBackground'} id={'myPortfolio'}
      bgText={'Портфолио'}
      supportText={'МОИ РАБОТЫ'}
      mainText={'Портфолио'}
      bgColor={'#181A21'}>
      <div className={styles.mainDiv}>
        <PortfolioHeader activeTab={tab} setTab={setTab} setPage={setPage}></PortfolioHeader>
        <div className={styles.arrowDiv}>
          <ArrowButtons clickBack={BackPage} clickForward={ForwardPage}></ArrowButtons>
        </div>
        <div className={styles.portfolioCardsRowWrapper}>
        {formComponents(tab).map((comp, i) => {
          if (i > 0){
            if (countElementsInRow === 1){
              return(
                <div className={page === 0 ? styles.portfolioCardsRowUnactive : styles.portfolioCardsRow} key={i}>{comp}</div>
              )
            }
            else{
              return(
                <div className={page === i + 1 ? styles.portfolioCardsRow : styles.portfolioCardsRowUnactive} key={i}>{comp}</div>
              )
            }
          }
          else{
            return(
              <div className={page === 1 ? styles.portfolioCardsRow : styles.portfolioCardsRowUnactive} key={i}>{comp}</div>
            )
          }
        })}
        </div>
      </div>
    </PagePartBackground>
  )
}