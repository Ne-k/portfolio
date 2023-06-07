const AUTH_TOKEN = 'G%269kKbD10lZxjYDTQqUw6ggsKmMoejYjKqovXQ';
const PASSWORD = 'wlhs2023';

function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    if (password === PASSWORD) {
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

module.exports = handler;