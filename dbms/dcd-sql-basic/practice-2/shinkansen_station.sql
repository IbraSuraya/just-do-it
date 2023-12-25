SELECT * FROM shinkansen_station;
SELECT Station_Name FROM shinkansen_station;

SELECT * FROM shinkansen_station WHERE Distance_from_Tokyo = 229.3;
SELECT * FROM shinkansen_station WHERE Distance_from_Tokyo = 293.6;
SELECT * FROM shinkansen_station WHERE Prefecture = 'Kanagawa';
SELECT * FROM shinkansen_station WHERE Station_Name = 'Atami';

SELECT * FROM shinkansen_station 
	WHERE Year = 1964 AND Prefecture = 'Shizuoka';
SELECT * FROM shinkansen_station 
	WHERE Prefecture = 'Tokyo' OR Prefecture = 'Aichi';
SELECT * FROM shinkansen_station 
	WHERE NOT Year = 1964;
SELECT * FROM shinkansen_station 
	WHERE Shinkansen_Line = 'Tokaido_Shinkansen' AND Year = 1988 
		AND Prefecture = 'Shizuoka';
SELECT * FROM shinkansen_station 
	WHERE Shinkansen_Line = 'Tokaido_Shinkansen' OR Prefecture = 'KANAGAWA';

SELECT * FROM shinkansen_station
	WHERE Prefecture LIKE 't%';
SELECT * FROM shinkansen_station
	WHERE Prefecture LIKE 'Sh%ka';
	
SELECT Prefecture as wilayah FROM shinkansen_station;
SELECT Station_Name as nama_stasiun, 
	Year as tahun, 
	Distance_from_Tokyo as jarak_dari_tokyo 
	FROM shinkansen_station;
	
SELECT * FROM shinkansen_station WHERE Distance_from_Tokyo = 0;
UPDATE shinkansen_station SET Distance_from_Tokyo = (
		SELECT AVG(Distance_from_Tokyo) FROM shinkansen_station 
		WHERE Distance_from_Tokyo != 0
	)WHERE Distance_from_Tokyo = 0;
SELECT * FROM shinkansen_station WHERE Station_Name = "Atami";
UPDATE shinkansen_station SET Station_Name = "Bandung"
	WHERE Station_Name = "Atami";
	
SELECT * FROM shinkansen_station ORDER BY Station_Name ASC;
SELECT * FROM shinkansen_station ORDER BY Prefecture DESC;

SELECT * FROM shinkansen_station LIMIT 5;
SELECT * FROM shinkansen_station LIMIT 7;

SELECT * FROM shinkansen_station LIMIT 5 OFFSET 1;
SELECT * FROM shinkansen_station LIMIT 7 OFFSET 3;

SELECT * FROM shinkansen_station WHERE Prefecture = 'Aichi';
DELETE FROM shinkansen_station WHERE Prefecture = 'Aichi';