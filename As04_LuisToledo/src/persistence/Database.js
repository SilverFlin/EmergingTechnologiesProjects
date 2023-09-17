import mysql from "mysql2/promise";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "products",
});

export function connectDb() {
  return new Promise((resolve, reject) => {
    db.connect((err) => {
      if (err) {
        reject(err);
        return;
      }
    });
    createTablesIfNotExists();
    resolve("\nConnected to database\n");
  });
}

export function closeDb() {
  return new Promise((resolve, reject) => {
    db.end((err) => {
      if (err) {
        reject(err);
        return;
      }
    });
    resolve("\nClosed database connection\n");
  });
}

async function createTablesIfNotExists() {
  const sqlQuery = `
    CREATE TABLE IF NOT EXISTS Products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      quantity INT NOT NULL
    )
  `;
  await db.query(sqlQuery);
}

export default db;
