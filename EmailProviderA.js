const EmailProvider = require("./EmailProvider")

class EmailProviderA extends EmailProvider {
    async sendEmail(to, subject, body) {
        await new Promise(resolve => setTimeout(resolve, 800));

        if(Math.random*10 <= 3){
            throw new Error("Email Provider A Failed!!");
        }

        console.log("Email Sent using Provider A");
        return true;
    }
}

module.exports = EmailProviderA