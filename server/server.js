const express = require('express');
const app = express();        // app define karo
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data/users.json');  // correct path
let users = [];

if (fs.existsSync(dataPath)) {
  const fileData = fs.readFileSync(dataPath, 'utf-8');
  users = fileData ? JSON.parse(fileData) : [];
}

function saveUsers() {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

app.post('/singup', (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  saveUsers();
  res.status(201).json({ message: "User register success", user: { name, email } });
});

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
