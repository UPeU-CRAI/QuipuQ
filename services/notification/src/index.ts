import express from 'express';

const app = express();
app.use(express.json());

app.post('/notify', (req, res) => {
  // placeholder for asynchronous notification via BullMQ
  console.log('Received notification', req.body);
  res.json({ ok: true });
});

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(process.env.PORT || 4000, () => {
  console.log('Notification service listening');
});
