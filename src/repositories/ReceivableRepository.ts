import { db } from "../config/database";

import dayjs from "dayjs";
class ReceivableRepository {
  public insertReceivable = async (
    receivable_description: String,
    receivable_category: String,
    receivable_value: Number,
    receivable_date: any
  ) => {
    db.transaction(async (trx: any) => {
        await trx('receivable').insert({
            entry_description: receivable_description,
            entry_category: receivable_category,
            entry_value: receivable_value,
            entry_date: dayjs(receivable_date).format('YYYY-MM-DD')
        });
    })
  };
}
export { ReceivableRepository };
