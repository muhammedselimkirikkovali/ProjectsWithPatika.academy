-- grouping by rating value
SELECT rating, COUNT(*) FROM film
GROUP BY rating
ORDER BY COUNT(*)
;

-- When we group the films in the film table according to the replacement cost column, list the replacement_cost value with more than 50 films and the corresponding number of films.
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50
;

-- What are the number of customers corresponding to the store_id values in the customer table?(customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?)
SELECT store_id, COUNT (*) FROM customer
GROUP BY store_id
;

-- After grouping the city data in the city table according to the country_id column, share the country_id information with the highest number of cities and the number of cities.( city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.)
SELECT country_id, COUNT (*) FROM city
GROUP BY country_id
ORDER BY COUNT (*) DESC
LIMIT 1
;