import { Producto, Venta } from "./";

class ProductoVenta {
    public id: number | undefined;
    constructor(
        public venta: Venta,
        public producto: Producto,
        public cantidadVendida: number,
        public subtotal: number,
        public precioVenta: number,
    ) { }
}
export { ProductoVenta }