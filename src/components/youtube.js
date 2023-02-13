const express = require('express')
const ytdl = require('ytdl-core')
const app = express()

app.get('/download', (req, res) => {
  const videoId = req.query.videoId
  const stream = ytdl(`https://www.youtube.com/watch?v=${videoId}`, { filter: format => format.container === 'mp4' })
  stream.pipe(res)
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})