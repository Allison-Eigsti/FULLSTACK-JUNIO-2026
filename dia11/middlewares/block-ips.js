function blockedIps(req, res, next) {
    const blockedIPs = ['192.168.1.100']

    if (blockedIPs.includes(req.ip)) {
        return res.status(403).send('Forbidden');
    }
    next();
}

module.exports = blockedIps