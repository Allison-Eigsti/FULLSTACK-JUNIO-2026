function authorization(req, res, next) {
    const authHeader = req.headers['authorization']

    console.log("Authorization:", authHeader); 

    if (authHeader != 'hello') {
        return res.status(402).json({ message: 'User is forbidden from accessing this page'})
    }
    next()
}

module.exports = authorization