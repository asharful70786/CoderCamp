import { sendMailService } from "../services/mailService.js";

export const sendMailController = async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body;
    if (!name || !email || !message, !subject, !phone) return res.status(400).json({ error: "All fields are required" });

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await sendMailService({ name, email, message, subject, phone });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};
