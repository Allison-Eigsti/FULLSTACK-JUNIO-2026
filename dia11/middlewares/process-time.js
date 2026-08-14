function processTime(req, res, next) {
    const start = process.hrtime.bigint()

    res.on('finish', () => {
        const finish = process.hrtime.bigint()
        const durationMs = Number(finish - start) / 1_000_000

        console.log(
            `${req.method} ${req.originalUrl} - ${res.statusCode} - ${durationMs.toFixed(2)} ms`
        )
    })
    
    next()
}

module.exports = processTime