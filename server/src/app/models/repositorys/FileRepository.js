import File from '../entitys/File';

class FileRepository {
  async store(data) {
    try {
      const { originalname: name, filename: path } = data;

      const file = await File.create({
        name,
        path,
      });

      return file;
    } catch (error) {
      return { message: 'Error', error };
    }
  }
}

export default new FileRepository();
