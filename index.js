import express from 'express'

const app = express()

app.get('/api', (req, res) => {
    const date = Date.now()
    res.json({
        unix: String(Date.now()),
        utc: new Date(date).toUTCString()
    })
})

app.get('/api/:unix_timestamp', async (req, res) => {
    const { unix_timestamp } = req.params
    const date = new Date(Number(unix_timestamp) * 1000)
    console.log(date)
    if (date == "Invalid Date") {
        res.json({
            error: "Invalid Date"
        })
    } else {
        const utc = date.toUTCString()
        res.json({
            unix: unix_timestamp,
            utc,
        })
    }
})


app.listen(3000, () => {
    console.log("express app is up!")
})
