import FileRepository from '../models/repositorys/FileRepository';

class FileController {
  async store(req, res) {
    try {
      const file = await FileRepository.store(req.file);

      return res.json(file);
    } catch (error) {
      return res.status(401).json({ error });
    }
  }
}

export default new FileController();
