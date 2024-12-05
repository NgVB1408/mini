const express = require('express');
const router = express.Router();
const axios = require('axios');
const TELEGRAM_BOT_TOKEN = '8008339604:AAG3O3Q1C6_5yzl21uvrX_vvXRhdS5v0oeI';

router.post('/', (req, res) => {
    const message = req.body.message;

    if (message && message.text === '/play') {
        const chatId = message.chat.id;

        // Gửi nút "Chơi ngay" với Miniapp
        axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: '🎮 Nhấn nút bên dưới để chơi trò chơi!',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Chơi ngay',
                            web_app: {
                                url: 'https://<YOUR_NETLIFY_URL>', // Thay bằng URL Miniapp
                            },
                        },
                    ],
                ],
            },
        });
    }

    res.sendStatus(200);
});

module.exports = router;
