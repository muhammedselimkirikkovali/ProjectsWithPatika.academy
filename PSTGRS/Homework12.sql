-- How many movies are longer than the average movie length?
SELECT count(*) FROM film 
WHERE film.length >
( 
	SELECT avg(length) FROM film
);

-- How many movies have the highest rental_rate in the movie table?
SELECT count(*) FROM film 
WHERE rental_rate =
( 
	SELECT max(rental_rate) FROM film
);

-- In the film table, list the films with the lowest rental rate and the lowest replacement cost.
SELECT rental_rate, replacement_cost FROM film 
WHERE rental_rate = ANY
(SELECT min(rental_rate) FROM film)
AND
replacement_cost =
(SELECT min(replacement_cost) FROM film);

-- In the payment table, list the customers who make the most purchases.
SELECT customer_id, COUNT(*) FROM payment
group by customer_id 
order by count(customer_id) desc
; 

