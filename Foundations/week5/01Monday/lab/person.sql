CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    age int,
    height int,
    city VARCHAR,
    favorite_color VARCHAR
);
INSERT INTO person (name, age, height, city, favorite_color)
VALUES ('jo', 20, 52, 'roy', 'black'),
    ('frank', 40, 400, 'madrid', 'red'),
    ('john', 41, 125, 'lehi', 'pink'),
    ('albert', 12, 100, 'provo', 'purple'),
    ('derrick', 5, 450, 'salt lake', 'yellow'),
    ('chad', 45, 1350, 'orem', 'no color');

SELECT * FROM person ORDER BY height DESC;
SELECT * FROM person ORDER BY height;
SELECT * FROM person ORDER BY age DESC;
SELECT * FROM person WHERE age > 20;
SELECT * FROM person WHERE age = 18;
SELECT * FROM person WHERE age < 20 OR age > 30;
SELECT * FROM person WHERE age <> 27;
SELECT * FROM person WHERE favorite_color <> 'red';
SELECT * FROM person WHERE favorite_color <> 'red' AND favorite_color <> 'blue';
SELECT * FROM person WHERE favorite_color = 'orange' OR favorite_color = 'green';
SELECT * FROM person WHERE favorite_color in('orange','green','blue');
SELECT * FROM person WHERE favorite_color in('yellow','purple');


