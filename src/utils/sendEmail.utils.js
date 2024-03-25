import { createTransport } from "nodemailer";
import __dirname from "../../utils.js";

async function sendEmail(data) {
  try {
    const transport = createTransport({
      service: "gmail",
      port: process.env.PORT,
      auth: { user: process.env.G_MAIL, pass: process.env.G_PASS },
    });
    await transport.sendMail({
      from: `CODER <${process.env.G_MAIL}>`,
      to: data.email,
      subject: `USER ${data.name.toUpperCase()} REGISTERED!`,
      html: "<h1>USER REGISTERED!<h1><img src='cid:coderlogo' />",
      attachments: [
        {
          filename: "coder.jpeg",
          path: __dirname + "/public/assets/coder.jpeg",
          cid: "coderlogo",
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

export default sendEmail;
