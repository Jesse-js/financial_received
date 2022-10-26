// @ts-ignore
import config from '../../knexfile';
const db = require("knex")(config.development);

export { db };
