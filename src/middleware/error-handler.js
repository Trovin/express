export const errorHandler = (err, req, res) => {
    console.error(err);

    return res.status(err.status || 500).json({
        message: err.message || 'Server error'
    });
};