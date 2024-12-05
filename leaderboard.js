const express = require('express');
const router = express.Router();

let leaderboard = []; // Lưu tạm trong bộ nhớ. Bạn có thể thay bằng cơ sở dữ liệu.

router.get('/', (req, res) => {
    res.json(leaderboard);
});

router.post('/', (req, res) => {
    const { name, score } = req.body;

    if (!name || !score) {
        return res.status(400).json({ message: 'Dữ liệu không hợp lệ!' });
    }

    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5); // Chỉ lưu top 5
    res.json({ message: 'Bảng xếp hạng đã được cập nhật!', leaderboard });
});

module.exports = router;
