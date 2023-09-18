class Venta {
    public id: number | undefined;
    constructor(
        public total: number,
        public iva: number,
    ) { }
}

export { Venta }