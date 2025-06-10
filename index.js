import express from 'express'

const app = express()

// app.get('/api', (req, res) => {
//     const date = Date.now()
//     res.json({
//         unix: Date.now(),
//         utc: new Date(date).toUTCString()
//     })
// })

app.get('/api/:date', (req, res) => {
  const { date } = req.params;
  let parsedDate;

  // Check if it's a valid Unix timestamp (all digits)
  if (!isNaN(date) && /^\d+$/.test(date)) {
    parsedDate = new Date(Number(date)); // milliseconds!
  } else {
    parsedDate = new Date(date); // ISO date string
  }

  if (isNaN(parsedDate.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: parsedDate.getTime(),
      utc: parsedDate.toUTCString()
    });
  }
});

app.listen(3000, () => {
    console.log("express app is up!")
})
