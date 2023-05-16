-- title and descraption columns
SELECT title, description FROM film ;

-- Length > 60 and Length < 75
SELECT * FROM film 
WHERE length > 60 AND length < 75 ;

-- rental_rate 0.99 and replacement_cost 12.99 or 28.99
SELECT * FROM film 
WHERE rental_rate = 0.99 AND replacement_cost = 12.99 OR replacement_cost = 28.99 ;

-- Mary Last_name = 'Smith'
SELECT * FROM customer 
WHERE first_name = 'Mary' ;

SELECT * FROM film 
WHERE NOT (length > 50) AND NOT (rental_rate = 2.99 OR rental_rate = 4.99 ) ;