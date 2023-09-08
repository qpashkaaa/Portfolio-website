import { useState } from 'react';
import { useRouter } from "next/router";
import styles from '../../styles/ContactCard.module.css';

export default function ContactCard() {

  const [btnText, setBtnText] = useState('Отправить сообщение');
  const [headerText, setHeaderText] = useState('Отправить сообщение');
  const [resStatus, setResStatus] = useState(0);

  const [userName, setUserName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');

  const [userNameInputBorder, setUserNameInputBorder] = useState('#868A9B solid');
  const [contactInfoInputBorder, setContactInfoInputBorder] = useState('#868A9B solid');
  const [themeInputBorder, setThemeInputBorder] = useState('#868A9B solid');
  const [messageInputBorder, setMessageInputBorder] = useState('#868A9B solid');

  const SendFormToTelegram = async () => {

    if (userName == '' || contactInfo == '' || theme == '' || message ==''){
      setHeaderText('Заполните все поля');
      if (userName == '') {
        setUserNameInputBorder('red dotted');
      }
      else{
        setUserNameInputBorder('#868A9B solid');
      }
      if (contactInfo ==''){
        setContactInfoInputBorder('red dotted');
      }
      else{
        setContactInfoInputBorder('#868A9B solid');
      }
      if (theme == ''){
        setThemeInputBorder('red dotted');
      }
      else{
        setThemeInputBorder('#868A9B solid');
      }
      if (message == ''){
        setMessageInputBorder('red dotted');
      }
      else{
        setMessageInputBorder('#868A9B solid');
      }
    }
    else {
      setHeaderText('Отправить сообщение');
      setUserNameInputBorder('#868A9B solid');
      setContactInfoInputBorder('#868A9B solid');
      setThemeInputBorder('#868A9B solid');
      setMessageInputBorder('#868A9B solid');
      
      var messageToTelegram = `<b>Сообщение с сайта-портфолио</b>\n`;
      messageToTelegram += `<b>Имя: </b>${userName}\n`;
      messageToTelegram += `<b>Контактные данные: </b>${contactInfo}\n`;
      messageToTelegram += `<b>Тема: </b>${theme}\n`;
      messageToTelegram += `<b>Сообщение: </b>${message}`;

      const response = await fetch('api/telegramBot', {
        method: 'POST',
        body: JSON.stringify({ messageToTelegram }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();

      setResStatus(response.status)
      if (response.status === 200) {
        setHeaderText(data.message);
        setUserName('');
        setContactInfo('');
        setTheme('');
        setMessage('');
      }
      else {
        setBtnText(data.message);
        setTimeout(() => {
          setBtnText('Отправить сообщение')
          setResStatus(0)
        }, 5000)
      }
    }
  }

  const SendFormToTelegramLocked = async () => { }

  return (
    <>
      <div className={resStatus === 200 ? styles.mainDiv200Code : styles.mainDiv}>
        <div className={styles.headerDiv}>{headerText}</div>
        <div className={resStatus === 200 ? styles.hide200Code : styles.nameAndEmailDiv}>
          <div className={styles.nameDiv}>
            <input className={`userNameBorderInput ${styles.shortInput}`}
              placeholder={'Ваше имя'}
              maxLength={30}
              value={userName}
              onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className={resStatus === 200 ? styles.hide200Code : styles.emailDiv}>
            <input className={`contactInfoBorderInput ${styles.shortInput}`}
              placeholder={'Контактные данные'}
              maxLength={50}
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)} />
          </div>
        </div>
        <div className={resStatus === 200 ? styles.hide200Code : styles.themeDiv}>
          <input className={`themeInfoBorderInput ${styles.longInput}`}
            placeholder={'Тема'}
            maxLength={70}
            value={theme}
            onChange={(e) => setTheme(e.target.value)} />
        </div>
        <div className={resStatus === 200 ? styles.hide200Code : styles.messageDiv}>
          <textarea className={`messageInfoBorderInput ${styles.messageTextArea}`}
            placeholder={'Введите Ваше сообщение'}
            maxLength={350}
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className={resStatus === 200 ? styles.hide200Code : ''}>
          <div className={resStatus != 0 ? styles.submitButtonDivError : styles.submitButtonDiv} onClick={resStatus != 0 ? SendFormToTelegramLocked : SendFormToTelegram}>{btnText}</div>
        </div>
      </div>
      <style jsx>{`
        .userNameBorderInput {
          border: 2px ${userNameInputBorder};
          transition: border 0.5s linear;
        }
        .contactInfoBorderInput {
          border: 2px ${contactInfoInputBorder};
          transition: border 0.5s linear;
        }
        .themeInfoBorderInput {
          border: 2px ${themeInputBorder};
          transition: border 0.5s linear;
        }
        .messageInfoBorderInput {
          border: 2px ${messageInputBorder};
          transition: border 0.5s linear;
        }
        @media only screen and (max-width : 320px) {
          .userNameBorderInput {
            border: 1px ${userNameInputBorder};
          }
          .contactInfoBorderInput {
            border: 1px ${contactInfoInputBorder};
          }
          .themeInfoBorderInput {
            border: 1px ${themeInputBorder};
          }
          .messageInfoBorderInput {
            border: 1px ${messageInputBorder};
          }
        }
      `}</style>
    </>
  )
}