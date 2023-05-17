-- Start to 'A' and end to 'a'
SELECT country FROM country 
WHERE country LIKE 'A%a'

-- at least 6 characters and end to 'n'
SELECT country FROM country 
WHERE country LIKE '_____%n'

-- 4 piece 't' characters
SELECT title FROM film 
WHERE title ILIKE '%t%t%t%t%'

SELECT * FROM film 
WHERE title LIKE 'C%' AND LENGTH >90 AND rental_rate = 2.99 ;