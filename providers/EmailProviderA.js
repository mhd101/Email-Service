const EmailProvider = require("./EmailProvider")

class EmailProviderA extends EmailProvider {
    async sendEmail(to, subject, body) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Sending email using provider A");
        let flag = 1;
        if(flag == 1){ // failing provider A
            throw new Error("Sending email failed using provider A");
        }
        
        console.log("Email successfully sent using provider A");
        return true;
    }
}

module.exports = EmailProviderA





