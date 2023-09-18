import { Producto } from "../models";
import { Connection } from "mysql2"

class CreadorDeVentas {
    constructor(private connection: Connection) {
    }


    public crear(productos: Producto[]): void {
        this.connection.beginTransaction((err) => {



        })
    }
}