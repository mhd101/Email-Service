class EmailService{
    constructor(ProviderA, ProviderB){
        this.ProviderA = ProviderA;
        this.ProviderB = ProviderB;

        this.sentEmails = new Set(); // track unique emails
        this.status = new Map(); // store the current status of each mail sent

    }

    async send(email){
        if(this.sentEmails.has(email.id)){
            return this.status.get(email.id);
        }

        let success = false;
        let attempts = 0;

        // Exponential Backoff
        while(attempts < 2 && !success){
            try {
                this.status.set(email.id, 'Retrying!!');
                await this.ProviderA.sendEmail(email.to, email.subject, email.body);
                success = true;
                this.status.set(email.id, 'Sent Mail using Provider A!!');
            } catch {
                await this.delay(2 ** attempts * 500); // Exponential Backoff
                attempts++;
            }
        }
    }
}