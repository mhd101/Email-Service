// Act as an Abstract Class for multiple email providers 
class EmailProvider {
    async sendEmail(to, subject, body){
        throw new Error("sendEmail() must be implemented");
    }

}

module.exports = EmailProvider;