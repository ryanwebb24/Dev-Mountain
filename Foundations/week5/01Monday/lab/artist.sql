INSERT INTO artist (artist_id, name) 
    VALUES (276, 'banjo joe'),
    (277, 'Kanye West'),
    (278, 'mozart');

SELECT * FROM artist ORDER BY name DESC LIMIT 10;
SELECT * FROM artist ORDER BY name LIMIT 5;
SELECT * FROM artist WHERE name like 'Black%';
SELECT * FROM artist WHERE name like '%Black%';
