import { Connection } from "mysql2"
import { Venta } from "../../models";

class VentasDAO implements BaseDAO<Venta>{
    constructor(public connection: Connection) { }

    async save(venta: Venta): Promise<Venta> {
        const query = `INSERT INTO venta (total, iva) VALUES (?, ?)`
        const params = [venta.total, venta.iva]

        return new Promise((resolve, reject) => {
            this.connection.query(query, params, (err, result) => {
                if (err) reject(err)
                venta.id = (result as any)?.insertId
                resolve(venta)
            })
        })
    }

}

export default VentasDAO;