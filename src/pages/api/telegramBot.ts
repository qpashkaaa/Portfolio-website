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
        messageToClient.message = 'The message has been sent successfully! I will contact you soon!'
      }
      else{
        messageToClient.message = 'Error sending the message, please try again later.';
      }
      res.status(externalRes.status).json(messageToClient);
    })
  }
}