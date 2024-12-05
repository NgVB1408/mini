const express = require('express');
const bodyParser = require('body-parser');
const webhook = require('./bot/webhook');
const leaderboard = require('./bot/routes/leaderboard');
const game = require('./bot/routes/game');

const app = express();
app.use(bodyParser.json());

// Endpoint webhook Telegram
app.use('/webhook', webhook);

// API cho bảng xếp hạng
app.use('/leaderboard', leaderboard);

// API nhận điểm từ Miniapp
app.use('/game', game);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy trên cổng ${PORT}`));
