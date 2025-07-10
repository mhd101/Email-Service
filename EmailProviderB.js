const EmailProvider = require("./EmailProvider")

class EmailProviderB extends EmailProvider {
    async sendEmail(to, subject, body) {
        await new Promise(resolve => setTimeout(resolve, 800));

        if(Math.random*10 > 3){
            throw new Error("Email Provider B Failed!!");
        }

        console.log("Email Sent using Provider B");
        return true;
    }
}

module.exports = EmailProviderB