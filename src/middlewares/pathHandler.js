export default (req, res, next) => {
  console.error(`${req.method} ${req.url} not found path`);
  return res.json({
    status: 500,
    path: `${req.method} ${req.url}`,
    message: `not found path`,
  });
};
