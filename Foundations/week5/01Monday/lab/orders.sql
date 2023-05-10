CREATE TABLE orders (
    order_id serial PRIMARY KEY,
    person_id INT,
    product_name VARCHAR,
    product_price float,
    quantity INT
);

INSERT INTO orders (person_id, product_name, product_price, quantity) 
    VALUES (1, 'dorito', .50, 1),
    (2, 'twinkie', 2, 5),
    (2, 'mtn dew', 15, 3),
    (5, 'lasagna', 6, 1),
    (3, 'assorted fruit', 250, 10);

SELECT * FROM orders;
SELECT SUM(quantity) FROM orders;
SELECT SUM(product_price * quantity) FROM orders;
SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 2