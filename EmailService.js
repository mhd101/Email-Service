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

        // if Provider A is failed, then switch to provider B
        if(!success){
            try {
                this.status.set(email.id, 'Retrying, Fallback Used!!');
                await this.ProviderB.sendEmail(email.to, email.subject, email.body);
                success = true;
                this.status.set(email.id, 'Sent Mail using Provider B!!');
            } catch {
                this.status.set(email.id, 'Failed to send Mail!!');
                return "Failed";
            }
        }

        this.sentEmails.add(email.id);
        return this.status.get(email.id);
    }

    delay(md){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    getStatus(id){
        return this.status.get(id);
    }
}