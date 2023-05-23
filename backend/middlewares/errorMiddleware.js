const notFound = (req, res, next) => {
    const error = new Error(`Not Found  $(req.orignalUrl) `);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "prouduction " ? null : err.stack,
    });
};

module.exports = { notFound, errorHandler }