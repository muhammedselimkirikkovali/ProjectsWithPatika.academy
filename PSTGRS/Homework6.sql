-- Average rental rate
SELECT AVG(rental_rate) FROM film ;

-- How mant start the caracter with 'C'
SELECT COUNT(title) FROM film
WHERE title LIKE 'C%' ;

-- How many minutes is the longest movie with rental_rate equal to 0.99 from the movies in the movie table?
SELECT MAX(length) FROM film
WHERE rental_rate = 0.99 ;

-- How many different replace_cost values are there for the movies in the movie table that are longer than 150 minutes?
SELECT COUNT (DISTINCT(replacement_cost)) FROM film
WHERE length > 150
;