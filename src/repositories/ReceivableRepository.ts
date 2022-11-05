import { db } from "../config/database";

import dayjs from "dayjs";
class ReceivableRepository {
  public insertReceivable = async (
    receivable_description: String,
    receivable_category: String,
    receivable_value: Number,
    receivable_date: Date
  ) => {
    db.transaction(async (trx: any) => {
      await trx("receivable").insert({
        entry_description: receivable_description,
        entry_category: receivable_category,
        entry_value: receivable_value,
        entry_date: dayjs(receivable_date).format("YYYY-MM-DD"),
      });
    });
  };

  public deleteReceivable = async (receivable_id: Number) => {
    db.transaction(async (trx: any) => {
      await trx("receivable").where("entry_id", receivable_id).del();
    });
  };

  public getReceivable = async (
    receivable_date_begin: Date,
    receivable_date_end: Date
  ) => {
    return await db
      .withSchema("receivables_db")
      .select("*")
      .from("receivable")
      .whereBetween("entry_date", [
        dayjs(receivable_date_begin).format("YYYY-MM-DD"),
        dayjs(receivable_date_end).format("YYYY-MM-DD"),
      ]);
  };

  public updateReceivable = async (
    receivable_id: Number,
    receivable_description: String,
    receivable_category: String,
    receivable_value: Number,
    receivable_date: Date
  ) => {
    return await db.transaction(async (trx: any) => {
      await trx("receivable")
        .where("entry_id", receivable_id)
        .update({
          entry_description: receivable_description,
          entry_category: receivable_category,
          entry_value: receivable_value,
          entry_date: dayjs(receivable_date).format("YYYY-MM-DD"),
        });
    });
  };
}
export { ReceivableRepository };
