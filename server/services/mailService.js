import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMailService = async ({ name, email, phone, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const htmlTemplate = `
    <html>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <table width="100%" style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color: #1a1a1a; color: white; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">📩 New Message from CoderCamp</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
              <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center;">
              <a href="https://wa.me/91${phone}" style="background-color: #0dc143; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">
                💬 Reply via WhatsApp
              </a>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f4f4f4; color: #777; text-align: center; font-size: 12px; padding: 10px;">
              This message was sent from your portfolio site – <strong>CoderCamp</strong>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.Node_MAILER_Reciver,
    subject: subject || "📨 New Message from CoderCamp Website",
    html: htmlTemplate,
  });
};
