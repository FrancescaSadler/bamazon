-- Then create a Table inside of that database called products.
-- The products table should have each of the following columns:



CREATE DATABASE bamazon1;

USE bamazon1;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT default 0,
  PRIMARY KEY (product_id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("party hats","party favors", 4.00, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("streamers","party favors", 10.00, 300);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("vitamin c serum","beauty", 12.00, 500);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("sunglasses","accessories", 15.00, 800);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("pan","kitchen", 8.00, 200);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("pillow","bedding", 17.00, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("lamp","decor", 20.00, 400);

SELECT * FROM products;