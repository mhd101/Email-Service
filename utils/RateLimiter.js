
const requestCounts = {};

const RateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now()

    if (!requestCounts[ip]) {
        requestCounts[ip] = {
            count: 1,
            lastRequest: now
        }
    } else {
        const timeSinceLastRequest = now - requestCounts[ip].lastRequest;
        const timeLimit = 5 * 60 * 1000; // 5 minutes

        if (timeSinceLastRequest < timeLimit) {
            requestCounts[ip].count += 1
        } else {
            requestCounts[ip] = {
                count: 1,
                lastRequest: now
            }
        }
    }

    const maxRequests = 5;

    if (requestCounts[ip].count > maxRequests){
        return res.status(429).json({
            message: 'Too many requests, please try again later!'
        })
    }
    requestCounts[ip].lastRequest = now;
    next();

}

module.exports = RateLimiter