# What It This?
  **Portfolio website written using Next.js**
  >*This is a portfolio website implemented using a framework Next.js . Made to demonstrate development skills, and additional study of this technology. The website design was created in the online graphic editor Figma. Based on the design created in Figma, this portfolio website was implemented.*

## [Preview](https://portfolio-website-qpashkaaa.vercel.app/)
### Screenshots
_____
![Preview](https://github.com/qpashkaaa/Portfolio-website/assets/95401099/86ffad5b-28ef-41ce-a72a-1fe570dbba92)
_____


## Features
- **The function of sending messages from the site form to Telegram using Next.js API and Bot API.**
```TypeScript
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST'){

    const messageToClient = {
      message: ''
    }

    await fetch(process.env.TELEGRAM_URL_API,{
      method: 'POST',
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        parse_mode: 'html',
        text: req.body.messageToTelegram
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(externalRes => {
      if (externalRes.status === 200){
        messageToClient.message = 'Сообщение успешно отправлено! В скором времени я свяжусь с Вами!'
      }
      else{
        messageToClient.message = 'Ошибка отправки сообщения, повторите попытку позже';
      }
      res.status(externalRes.status).json(messageToClient);
    })
  }
}
```
- **A component-oriented architecture built on the interaction of multiple React Components that perform their functions.**
```TypeScript
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
```
```HTML
<div className={styles.cardsRow}>
  <DevToolCard devTool={'C#'} percentage={80}></DevToolCard>
  <DevToolCard devTool={'C++'} percentage={50}></DevToolCard>
</div>
```
- **Adaptation to different devices using Media queries.**
```CSS
@media only screen and (max-width : 992px) {
    .header{
        display:block;
    }
}
@media only screen and (max-width : 768px) {
    .navContainer .checkbox {
        left: 85%;
    }
    
    .navContainer .hamburgerLines {
        left: 85%;
    }
}
@media only screen and (max-width : 320px) {
    .navContainer .hamburgerLines{
        top:10px;
        height: 20px;
        width: 25px;
    }
    .navContainer .checkbox {
        top:10px;
        height: 20px;
        width: 25px;
    }
    .navContainer{
        height: 40px;
    } 
    .navbar .menuItems{
        padding-top: 40px;
    }
}
```

## Tech Stack
- **Next.js**
- **TypeScript**
- **CSS**
- **Telegram Bot API**

## Authors
- [Pavel Roslyakov](https://github.com/qpashkaaa)

## Contacts
- [Portfolio Website](https://portfolio-website-qpashkaaa.vercel.app/)
- [Telegram](https://t.me/qpashkaaa)
- [VK](https://vk.com/qpashkaaa)
- [LinkedIN](https://www.linkedin.com/in/pavel-roslyakov-7b303928b/)

## Year of Development
> *2023*
  
