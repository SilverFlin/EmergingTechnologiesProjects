import { Connection } from "mysql2"
import { Producto } from "../../models";

class ProductosDAO implements BaseDAO<Producto>{
    constructor(public connection: Connection) { }

    async save(entity: Producto): Promise<Producto> {
        const query = `INSERT INTO producto (nombre, precio, cantidad) VALUES (?, ?, ?)`
        const params = [entity.nombre, entity.precio, entity.cantidad]

        return new Promise((resolve, reject) => {
            this.connection.query(query, params, (err, result) => {
                if (err) reject(err)
                entity.id = (result as any)?.insertId
                resolve(entity)
            })
        })
    }


}

export default ProductosDAO;