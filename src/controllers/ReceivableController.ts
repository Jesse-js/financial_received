import { Request, Response } from "express";
import { ReceivableRepository } from "../repositories/ReceivableRepository";
class ReceivableController {
  public insertReceivable = async (request: Request, response: Response) => {
    try {
      const receivable = new ReceivableRepository();
      const { entry_description, entry_category, entry_value, entry_date } =
        request.body;
      await receivable.insertReceivable(
        entry_description,
        entry_category,
        entry_value,
        entry_date
      );
      return response.status(200).json({
        status: 200,
        message: 'Entry created with sucess!'
      })
    } catch (error) {}
  };
}
export { ReceivableController };
