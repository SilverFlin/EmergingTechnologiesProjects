import { ProductoVenta } from "../../models";
import { Connection } from "mysql2"

class ProductoVentaDAO implements BaseDAO<ProductoVenta> {

    constructor(public connection: Connection) { }

    save(entity: ProductoVenta): Promise<ProductoVenta> {
        const query = `INSERT INTO ProductoVenta (idVenta, idProducto, cantidadVendida, subtotal, precioVenta) VALUES (?, ?, ?, ?, ?)`
        const params = [entity.venta.id, entity.producto.id, entity.cantidadVendida, entity.subtotal, entity.precioVenta]

        return new Promise((resolve, reject) => {
            this.connection.beginTransaction(err => {
                if (err) reject(err)

                this.connection.query(query, params, (err, result) => {
                    if (err) {
                        this.connection.rollback(() => reject(err))
                    }
                    entity.id = (result as any)?.insertId
                    resolve(entity)
                })
            })

        })
    }

}

export default ProductoVentaDAO;