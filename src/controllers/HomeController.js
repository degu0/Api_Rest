import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Devi',
      sobrenome: 'Guilherme',
      email: 'daviguilherme@gmail.com',
      idade: 18,
      peso: 61,
      altura: 1.77,
    })
    res.json({novoAluno});
  }
}

export default new HomeController();
