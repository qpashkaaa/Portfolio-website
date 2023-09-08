import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'
 
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