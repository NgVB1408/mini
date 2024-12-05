const axios = require('axios');
const TELEGRAM_BOT_TOKEN = '8008339604:AAG3O3Q1C6_5yzl21uvrX_vvXRhdS5v0oeI';

async function sendMessage(chatId, text) {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: text,
        });
        return response.data;
    } catch (error) {
        console.error('Lỗi khi gửi tin nhắn:', error.message);
    }
}

module.exports = { sendMessage };
