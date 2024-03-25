import twilio from "twilio";

export default async (phone) => {
  try {
    const client = twilio(process.env.T_SID, process.env.T_TOKEN);
    await client.messages.create({
      body: "holaaa",
      from: process.env.T_PHONE,
      to: phone,
    });
  } catch (error) {
    throw error;
  }
};
