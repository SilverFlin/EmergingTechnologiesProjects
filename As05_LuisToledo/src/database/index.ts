import 'dotenv/config'
import mysql from 'mysql2'

const { DB_HOST, DB_USER, DB_PASSWORD } = process.env

const dbConnection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: 'ventas_toledo'
})

export default dbConnection