const {sendEmail} = require("../controllers/EmailController")
const EmailService = require("../services/EmailService")


const mockRequest = (body) => ({body})

const mockResponse= () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res)
    return res
}

describe("sendEmail controller", () => {

    // when any field is missing
    it('responds 400 when any field is missing', async () => {
        const req= mockRequest({
            // missing id 
            to: "test@test.com",
            subject: "hi",
            body: "hello" 
        })

        const res = mockResponse()

        await sendEmail(req,res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: "Missing Email fields !!"})
    })

})