import { verifyToken } from "../utils/token.utils.js";

const isAdmin = (req, res, next) => {
  try {
    //console.log(req.headers);
    const data = verifyToken(req.headers)
    //console.log(data);
    if (data.role === 1) {
      return next();
    }
    const error = new Error("Forbidden");
    error.statusCode = 403;
    throw error;
  } catch (error) {
    return next(error);
  }
};

export default isAdmin;
