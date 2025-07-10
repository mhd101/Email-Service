const EmailProviderA = require("./utils/EmailProviderA")
const EmailProviderB = require("./utils/EmailProviderB")
const EmailService = require("./services/EmailService")


const ProviderA = new EmailProviderA()
const ProviderB = new EmailProviderB()
const Service = new EmailService(ProviderA, ProviderB)

const email = {
    id: 1,
    to: "test@test.com",
    subject: "HI",
    body: "Thanks"
}

const sendMail = async () => {
    try {
        const result =  await Service.send(email)

        console.log("Final Status:", result);
    } catch (error){
        console.log(error.message);
    }
}


sendMail()



