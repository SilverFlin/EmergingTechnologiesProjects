-- Create the ventas-toledo database if it doesn't exist
DROP DATABASE IF EXISTS ventas_toledo;
CREATE DATABASE IF NOT EXISTS ventas_toledo;


-- Use the ventas-toledo database
USE ventas_toledo;

-- Create the Producto table if it doesn't exist
CREATE TABLE IF NOT EXISTS Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL
);

-- Create the Venta table if it doesn't exist
CREATE TABLE IF NOT EXISTS Venta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10, 2) NOT NULL,
    iva DECIMAL(10, 2) NOT NULL
);

-- Create the ProductoVenta table if it doesn't exist
CREATE TABLE IF NOT EXISTS ProductoVenta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idVenta INT NOT NULL,
    idProducto INT NOT NULL,
    cantidadVendida INT NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    precioVenta DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (idVenta) REFERENCES Venta(id),
    FOREIGN KEY (idProducto) REFERENCES Producto(id)
);
