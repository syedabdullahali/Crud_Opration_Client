const nodemailer = require("nodemailer");
require("dotenv").config()

function sendOtpMail(email, OTP) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_EMAIL,
            pass: process.env.NODE_MAILER_PASSWORD,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_EMAIL,
        to: email,
        subject: "Account created successfully",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #dddddd; border-radius: 10px;">
                <h2 style="color: #333;">Welcome to our Adiya Service!</h2>
                <p style="color: #555;">
                    Thank you for choosing us! We are excited to have you on board.
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <p style="font-size: 18px; font-weight: bold; color: black;">Your OTP is:</p>
                    <p style="font-size: 24px; font-weight: bold; color: gray;">${OTP}</p>
                </div>
                <p style="color: #555;">
                    Please use this OTP to complete your registration process. If you did not request this email, please ignore it.
                </p>
                <p style="color: #999; font-size: 12px;">
                    If you have any questions, feel free to contact our support team.
                </p>
                <p style="color: #999; font-size: 12px;">
                    Best regards,<br>
                    Adiya Service! Team
                </p>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return { error: error };
        } else {
            console.log(info)
            return { success: true, message: info.response };
        }
    });
}

module.exports = sendOtpMail;
