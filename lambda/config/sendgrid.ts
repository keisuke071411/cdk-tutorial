import * as sgMail from '@sendgrid/mail'

const sendGridApiKey = process.env.API_KEY as string
if (!sendGridApiKey) throw new Error('sendGridApiKey variable is not setting')

sgMail.setApiKey(sendGridApiKey)

export default sgMail
