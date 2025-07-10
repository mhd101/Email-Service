class EmailService {
    constructor(ProviderA, ProviderB) {
        this.ProviderA = ProviderA;
        this.ProviderB = ProviderB;

        this.sentEmails = new Set(); // track unique emails
        this.status = new Map(); // store the current status of each mail sent

    }

    async send(email) {

        if (!email || !email.id || !email.to || !email.subject || !email.body) {
            throw new Error("Invalid email object. Fields id, to, subject, and body are required.");
        }

        if (this.sentEmails.has(email.id)) {
            return this.status.get(email.id);
        }

        let success = false;

        // Sending Email using Provider A
        let attempts = 1;
        while (attempts <= 3 && !success) {
            try {
                this.status.set(email.id, 'Retrying');
                console.log(`Retrying, sending email using provider A (Attempt: ${attempts})`)
                await this.ProviderA.sendEmail(email.to, email.subject, email.body);
                success = true;
                this.status.set(email.id, 'Sent email using provider A');
            } catch {
                await this.delay(2 ** attempts * 500); // Exponential Backoff
                attempts++;
            }
        }

        // if Provider A is failed, then switch to provider B
        if (!success) {
            try {
                this.status.set(email.id, 'Retrying, using Fallback Mechanism');
                console.log("Status: " + this.status.get(email.id));
                await this.ProviderB.sendEmail(email.to, email.subject, email.body);
                success = true;
                this.status.set(email.id, 'Sent email using Provider B');
                console.log("Status: " + this.status.get(email.id))
            } catch {
                this.status.set(email.id, 'Failed to send email');
            }
        }

        this.sentEmails.add(email.id);
        console.log(this.sentEmails)
        return this.status.get(email.id);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    getStatus(id) {
        return this.status.get(id);
    }
}

module.exports = EmailService;
