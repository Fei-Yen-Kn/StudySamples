const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Multer 설정: public/assets 폴더에 파일 저장
const upload = multer({
  dest: path.join(__dirname, 'public', 'assets'), // 업로드된 파일을 저장할 폴더
  filename: (req, file, cb) => {
    cb(null, file.originalname); // 파일 이름을 원래 이름으로 저장
  },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    const filePath = `/assets/${req.file.filename}`; // 저장된 파일 경로 반환
    res.json({ success: true, filePath: filePath });
  } else {
    res.status(400).json({ success: false, message: 'No file uploaded' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});