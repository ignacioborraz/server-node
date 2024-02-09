const isAdmin = (req, res, next) => {
  try {
    if (req.session.role === 1) {
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
