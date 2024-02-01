import { orders } from "../../data/mongo/manager.mongo.js";
import { Router } from "express";

const ordersRouter = Router();

ordersRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const one = await orders.create(data);
    return res.json({
      statusCode: 201,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
});
ordersRouter.get("/",async(req,res,next)=>{
  try {
    let filter = {}
    if (req.query.user_id) {
      filter = { user_id: req.query.user_id }
    }
    const all = await orders.read({filter})
    return res.json({
      statusCode: 200,
      response: all
    })
  } catch (error) {
    return next(error)
  }
})
ordersRouter.get("/report/:uid",async(req,res,next)=>{
  try {
    const { uid } = req.params;
    const one = await orders.report(uid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
})
ordersRouter.get("/:oid", async(req,res,next)=>{
  try {
    const { oid } = req.params
    const one = await orders.readOne(oid)
    return res.json({
      statusCode: 200,
      response: one
    })
  } catch (error) {
    return next(error)
  }
})
//router.put()
//router.delete()

export default ordersRouter;
