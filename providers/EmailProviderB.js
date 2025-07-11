const EmailProvider = require("./EmailProvider")

class EmailProviderB extends EmailProvider {
    async sendEmail(to, subject, body) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Sending email using provider B");

        let flag = 1;
        if(flag != 1){ // not failing provider B
            throw new Error("Sending email failed using provider B");
        }

        console.log("Email successfully sent using provider B");
        return true;
    }
}

module.exports = EmailProviderB

