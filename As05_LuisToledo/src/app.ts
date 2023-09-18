import connection from "./database";
import { ProductosDAO, VentasDAO, ProductoVentaDAO } from "./persistence/daos";
import { Venta, Producto, ProductoVenta } from "./models";

run();

async function run() {

    const ventasDAO = new VentasDAO(connection);
    const productosDAO = new ProductosDAO(connection);
    const productoVentaDAO = new ProductoVentaDAO(connection);


    let venta: Venta = await ventasDAO.save(new Venta(100, 16))

    let producto: Producto = await productosDAO.save(new Producto("Coca Cola", 15, 100))

    let productoVenta: ProductoVenta = await productoVentaDAO.save(new ProductoVenta(venta, producto, 10, 150, 15))

    console.log(productoVenta)

    connection.end();
}