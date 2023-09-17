import db, { connectDb, closeDb } from "./persistence/Database.js";
import { ProductDAO } from "./persistence/ProductDAO.js";
import { Product } from "./models/Product.js";

run().then(() => {
  closeDb()
    .then((e) => console.log(e))
    .catch((err) => console.log(err));
});

async function run() {
  return new Promise(async (resolve, reject) => {
    connectDb()
      .then((e) => console.log(e))
      .catch((err) => console.log(err));

    const productDAO = new ProductDAO(db);

    // Clean up
    const products = await productDAO.getAll();
    console.log("Current Products: ", products);
    products.forEach((product) => {
      productDAO.delete(product.id);
    });
    console.log("Clean Up: ", await productDAO.getAll());

    // CREATE
    const newProduct = new Product("Product 1", 10.0, 100);
    const newProductId = await productDAO.create(newProduct);
    console.log("Product Created:", await productDAO.getById(newProductId));

    // UPDATE
    const updatedProduct = new Product("Product 2", 20.0, 50);
    await productDAO.update(newProductId, updatedProduct);
    console.log("Product Updated:", await productDAO.getById(newProductId));

    // DELETE
    await productDAO.delete(newProductId);
    console.log("After Delete: ", await productDAO.getAll());

    resolve();
  });
}
