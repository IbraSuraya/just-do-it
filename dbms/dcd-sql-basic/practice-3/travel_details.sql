SELECT * FROM travel_details;

ALTER TABLE travel_details
	DROP COLUMN Transportationcost;

SELECT * FROM travel_details
	ORDER BY TripID DESC
	LIMIT 5;