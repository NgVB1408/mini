function saveScore(newScore) {
    const chatId = '<CHAT_ID>'; // Lấy từ URL hoặc người dùng Telegram

    fetch('https://<YOUR_BACKEND_URL>/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: playerName, // Tên người chơi
            score: newScore,
            chat_id: chatId,
        }),
    })
    .then(response => response.json())
    .then(data => console.log('Điểm đã gửi:', data))
    .catch(error => console.error('Lỗi khi gửi điểm:', error));
}
