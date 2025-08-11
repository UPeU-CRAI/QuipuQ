import express from 'express';

const app = express();
app.use(express.json());

app.post('/lookup', (req, res) => {
  const { dni } = req.body;
  res.json({ dni, name: 'Mock Citizen' });
});

app.post('/verify-face', (req, res) => {
  const { dni } = req.body;
  res.json({ dni, match: true, score: 0.9 });
});

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(process.env.PORT || 4100, () => {
  console.log('RENIEC adapter listening');
});
