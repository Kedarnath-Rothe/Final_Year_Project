const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, htmlContent) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', 
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "", // Replace with your email                        process.env.email
                pass: '', // Replace with your email password              process.env.passqord
            },
        });

        await transporter.sendMail({
            from: '', // Replace with your email
            to: email,
            subject: subject,
            html: htmlContent, // Use 'html' instead of 'text'
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email not sent!");
        console.log(error);
        return error;
    }
};


module.exports = sendEmail;
