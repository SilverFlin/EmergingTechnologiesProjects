class Producto {
    id: number | undefined;
    constructor(
        public nombre: string,
        public precio: number,
        public cantidad: number
    ) { }
}

export { Producto }