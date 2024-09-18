import app from './app';
import cors from 'cors';

app.use(cors());

const port = process.env.APP_PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
