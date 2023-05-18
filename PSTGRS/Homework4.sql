-- Different values in replacement_cost
SELECT DISTINCT replacement_cost FROM film ;

-- Number of values
SELECT COUNT (DISTINCT replacement_cost) FROM film ;

-- Start 'T' and rating = 'G'
SELECT COUNT (*) FROM film 
WHERE title LIKE 'T%' AND rating = 'G' ;

-- how many 5 characters are there
SELECT COUNT (*) FROM country 
WHERE country LIKE '_____' ;

-- how many end in 'r'
SELECT COUNT (*) FROM city 
WHERE city ILIKE '%r' ;