import app from './app';
import cors from 'cors';  // Certifique-se de importar o 'cors' corretamente

// Use o middleware CORS antes de configurar as rotas
app.use(cors());  // Permite requisições de qualquer origem

// Defina a porta corretamente
const port = process.env.APP_PORT || 3001;  // Use 3001 como fallback caso APP_PORT não esteja definido

// Inicie o servidor na porta configurada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
