class ProductDAO {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    const [rows] = await this.db.query("SELECT * FROM products");
    return rows;
  }

  async getById(id) {
    const query = "SELECT * FROM products WHERE id = ?";
    const [rows] = await this.db.query(query, [id]);
    return rows[0];
  }

  async create(product) {
    const query =
      "INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)";
    const [rows] = await this.db.query(query, [
      product.name,
      product.price,
      product.quantity,
    ]);
    return rows.insertId;
  }

  async update(id, product) {
    const query =
      "UPDATE products SET name = ?, price = ?, quantity = ? WHERE id = ?";
    const [rows] = await this.db.query(query, [
      product.name,
      product.price,
      product.quantity,
      id,
    ]);
    return rows.affectedRows;
  }

  async delete(id) {
    const query = "DELETE FROM products WHERE id = ?";
    const [rows] = await this.db.query(query, [id]);
    return rows.affectedRows;
  }
}

export { ProductDAO };
