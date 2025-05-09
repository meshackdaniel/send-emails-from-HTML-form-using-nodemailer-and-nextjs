import nodemailer from "nodemailer"

const email = "lasiowebs@gmail.com"
const password = "tbfcexqxpzdyvdai";

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: email,
        pass: password
    }
})

export const mailOptions = {
    from: email,
    to: email
}