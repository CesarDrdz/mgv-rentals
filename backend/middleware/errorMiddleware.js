const notFound = (req, res, next) => { 
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Check for Mongoose bad objectID || (CastError)
    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        message = ` Uh Oh.. Resourse not Found`;
        statusCode = 404;
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'pancakes' : err.stack,
    });
};
export { notFound, errorHandler };