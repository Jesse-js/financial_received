import { Request, Response } from "express";
import { ReceivableRepository } from "../repositories/ReceivableRepository";
import dayjs from "dayjs";
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
        message: "Entry created with sucess!",
      });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: "Internal server error!",
      });
    }
  };
  public getReceivables = async (request: Request, response: Response) => {
    try {
      const receivable = new ReceivableRepository();
      const date_begin: Date = new Date(String(request.query["date_begin"]));
      const date_end: Date = new Date(String(request.query["date_end"]));
      const results = await receivable.getReceivable(date_begin, date_end);
      return response.json(results);
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: "Internal server error!",
      });
    }
  };
  public deleteReceivable = async (request: Request, response: Response) => {
    try {
      const receivable = new ReceivableRepository();
      const { entry_id } = request.body;
      if (entry_id == undefined || entry_id == null)
        throw new Error("An paramater is missing!");
      await receivable.deleteReceivable(entry_id);
      return response.status(200).json({
        status: 200,
        message: "Entry deleted with sucess!",
      });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: "Internal server error!",
      });
    }
  };
}
export { ReceivableController };
