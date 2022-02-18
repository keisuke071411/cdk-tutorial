import sgMail from "./config/sendgrid";

exports.handler = async function (event: any) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  const companyMail = 'hackz.ezuka@gmail.com'
  const noReplyMail = 'noreply@hackz.team'

  const templateForNotifyHackz = 'd-beeea63fd8b4487f9652266d199f8b86'
  const templateForCustomer = 'd-9eeae067444748eea0ce97032dd9ce3a'

  let statusCode = 200
  let statusLog = `Hello, CDK! You've hit ${event.path}\n`

  try {

    await sgMail.send({
      to: companyMail,
      from: "i.love.football0714@gmail.com",
      templateId: templateForNotifyHackz,
      dynamicTemplateData: {
        type: "テスト",
        category: "テスト",
        name: "テスト",
        belongs: "テスト",
        email: "i.love.football0714@gmail.com",
        content: "テスト",
      },
    })

    // 問い合わせた人のメールアドレス宛に、問い合わせを受領したことを通知する
    await sgMail.send({
      to: "i.love.football0714@gmail.com",
      from: noReplyMail,
      templateId: templateForCustomer,
      dynamicTemplateData: {
        type: "テスト",
        category: "テスト",
        name: "テスト",
        belongs: "テスト",
        email: "i.love.football0714@gmail.com",
        content: "テスト",
      },
    })
  } catch (error) {
    console.log("error")
    console.log(error)
  }


  return {
    statusCode: statusCode,
    headers: { "Content-Type": "text/plain" },
    body: statusLog,
  };
};
