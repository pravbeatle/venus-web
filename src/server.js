import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(compression());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Serving now on port ${port} ...`);
});
