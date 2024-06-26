import User from "../../models/User"
import connectDb from "../../middlware/mongoos"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {name, email} = req.body
        console.log(email, name, req.body.password ,"data");
        let u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password,"secret123").toString()})
        await u.save()

        res.status(200).json({success: "success"})
    }
    else{
        res.status(400).json({error: "This method is not allowed"})
    }
}

export default connectDb(handler);