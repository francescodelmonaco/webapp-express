function setImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies_cover/`;
    next();
};

export default setImagePath;