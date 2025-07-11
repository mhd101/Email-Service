const EmailProviderA = require("../providers/EmailProviderA")
const EmailProviderB = require("../providers/EmailProviderB")
const EmailService = require("../services/EmailService")


const ProviderA = new EmailProviderA()
const ProviderB = new EmailProviderB()
const Service = new EmailService(ProviderA, ProviderB)

exports.sendEmail = async (req, res) => {
    const {id, to, subject, body} = req.body;

    
    if (!id || !to || !subject || !body){
        return res.status(400).json({
            error: "Missing Email fields !!"
        })
    }
    
    try {
        const status = await Service.send({id, to, subject, body});
        res.json({
            message: status
        })
    } catch (error){
        res.status(500).json({
            message: "Failed to send email !!"
        })
    }
}
