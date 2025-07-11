
##  Project Structure

```sh
└── Email-Service/
    ├── controllers
    │   └── EmailController.js
    ├── package-lock.json
    ├── package.json
    ├── providers
    │   ├── EmailProvider.js
    │   ├── EmailProviderA.js
    │   └── EmailProviderB.js
    ├── routes
    │   └── EmailRoutes.js
    ├── server.js
    ├── services
    │   └── EmailService.js
    ├── test
    │   └── EmailController.test.js
    └── utils
        └── RateLimiter.js
```

## Features

1. Created an `EmailService` class that works with two mock email providers.  
2. Implemented retry logic with exponential backoff.  
3. Added a fallback mechanism to switch providers on failure.  
4. Ensure idempotency to prevent duplicate sends.  
5. Implemented basic rate limiting.  
6. Provided status tracking for email sending attempts.

##  Installation

Install Email-Service using one of the following methods:

**Build from source:**

1. Clone the Email-Service repository:
```sh
❯ git clone https://github.com/mhd101/Email-Service/
```

2. Navigate to the project directory:
```sh
❯ cd Email-Service
```

3. Install the project dependencies:


```sh
❯ npm install
```


##  Usage
Run Email-Service using the following command:

```sh
❯ npm start
```

## API Endpoint

### `POST /api/sendEmail`

Send an email using the configured provider logic.

#### Request Body (application/json)

```json
{
  "id": "123",
  "to": "recipient@example.com",
  "subject": "Test Email",
  "body": "Hello from Email-Service!"
}
```

## Live Demo

https://www.google.com


##  Testing
Run the test suite using the following command:

```sh
❯ npm test
```

