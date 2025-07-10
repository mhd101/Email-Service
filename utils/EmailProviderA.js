const EmailProvider = require("./EmailProvider")

class EmailProviderA extends EmailProvider {
    async sendEmail(to, subject, body) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Sending Mail using Provider A");
        let flag = 1;
        if(flag == 1){ // explicity failing provider A
            throw new Error("Email Provider A Failed");
        }
        
        console.log("Email Successfully Sent using Provider A");
        return true;
    }
}

module.exports = EmailProviderA





