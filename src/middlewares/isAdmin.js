export default (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") {
      const error = new Error("Forbidden");
      error.statusCode = 403;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};
