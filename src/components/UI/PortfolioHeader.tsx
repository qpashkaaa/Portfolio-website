import styles from '../../styles/PortfolioHeader.module.css';
import PortfolioHeaderCustomLi from './PortfolioHeaderCustomLi';

export default function PortfolioHeader({activeTab,setTab, setPage}) {
  return (
    <div className={styles.portfolioHeaderDiv}>
        <ul className={styles.desktopUl}>
                <li onClick={()=> {setTab(1); setPage(0)}}>
                    <PortfolioHeaderCustomLi text={'Все'} active={activeTab === 1 ? true : false}></PortfolioHeaderCustomLi>
                </li>
                <li onClick={()=> {setTab(2); setPage(0)}}>
                    <PortfolioHeaderCustomLi text={'Десктоп'} active={activeTab === 2 ? true : false}></PortfolioHeaderCustomLi>  
                </li>
                <li onClick={()=> {setTab(3); setPage(0)}}>
                    <PortfolioHeaderCustomLi text={'Мобильные'} active={activeTab === 3 ? true : false}></PortfolioHeaderCustomLi>
                </li>
                <li onClick={()=> {setTab(4); setPage(0)}}>
                    <PortfolioHeaderCustomLi text={'Веб-сайты'} active={activeTab === 4 ? true : false}></PortfolioHeaderCustomLi>
                </li>
            </ul>
    </div>
  )
}
