import { sendSubscriptionMail } from "../services/subscribeService.js";

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    if ( !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    await sendSubscriptionMail({  email });

    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Failed to subscribe" });
  }
};
