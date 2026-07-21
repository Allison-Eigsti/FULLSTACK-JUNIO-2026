function authorization(req, res, next) {
    const authHeader = req.headers['authorization']

    console.log("Authorization:", authHeader); 

    if (authHeader != 'Bearer your_token_here') {
        return res.status(401).json({ message: 'User is forbidden from accessing this page'})
    }
    next()
}

module.exports = authorization