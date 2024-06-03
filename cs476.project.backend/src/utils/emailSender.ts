import nodemailer from "nodemailer";

function sendEmail(
  from: string,
  to: string,
  subject: string,
  text: string
): void {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: `${process.env.gmail}`,
      pass: `${process.env.password}`,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(
    mailOptions,
    (error: Error | null, info: nodemailer.SentMessageInfo) => {
      if (error) {
        console.log("Error occurred: ", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
}

export default sendEmail;
