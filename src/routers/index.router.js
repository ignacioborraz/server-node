import { Router } from "express";
import apiRouter from "./api/index.router.api.js";
import sendEmail from "../utils/sendEmail.utils.js";
import sendSmsUtils from "../utils/sendSms.utils.js";

const router = Router();
router.use("/api", apiRouter);
router.get("/", async (req, res) => {
    try {
        //await sendEmail("ignacioborraz@hotmail.com", "ignacio");
        await sendSmsUtils("+543412596847")
        return res.json({ status: 200 });      
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
  
});

export default router;
