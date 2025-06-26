const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/trigger', (req, res) => {
  const { context, emotion, timestamp } = req.body;

  if (!context || !emotion || !timestamp) {
    return res.status(400).json({ error: 'Missing fields: context, emotion, timestamp' });
  }

  const responseText = `SYNDESIS acknowledged your state: "${emotion}" within context: "${context}" at ${timestamp}.`;

  res.json({ response: responseText });
});

app.get('/', (req, res) => {
  res.send('SYNDESIS backend is live.');
});

app.listen(port, () => {
  console.log(`SYNDESIS server running on port ${port}`);
});