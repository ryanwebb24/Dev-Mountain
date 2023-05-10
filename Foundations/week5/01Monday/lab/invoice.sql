SELECT count(*) FROM invoice WHERE billing_country = 'USA';
SELECT max(total) FROM invoice;
SELECT total FROM invoice WHERE total > 5;
SELECT count(*) FROM invoice WHERE billing_state in('CA','TX','AZ');
SELECT avg(total) FROM invoice;
SELECT sum(total) FROM invoice;
UPDATE invoice SET total = 24 WHERE invoice_id = 5
DELETE FROM invoice_line WHERE invoice_id = 1
DELETE FROM invoice WHERE invoice_id = 1