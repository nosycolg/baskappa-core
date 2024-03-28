import { db } from '../database';
import { Request, Response } from 'express';

class CourtsController {

  async getCourts(req: Request, res: Response) {
    try {
      const data = await db.Courts.findAll();
      return res.json(data);
    } catch {
      return res.sendStatus(500);
    }
  };

  async createCourt(req: Request, res: Response) {
    try {
      const { adress } = req.body;
      const data = await db.Courts.create({ adress });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};

const courtsController = new CourtsController();
export default courtsController;