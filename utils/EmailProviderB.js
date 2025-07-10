const EmailProvider = require("./EmailProvider")

class EmailProviderB extends EmailProvider {
    async sendEmail(to, subject, body) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Sending Mail using Provider B");

        let flag = 1;
        if(flag != 1){ // explicitly not failing provider B
            throw new Error("Email Provider B Failed");
        }

        console.log("Email Successfully Sent using Provider B");
        return true;
    }
}

module.exports = EmailProviderB

