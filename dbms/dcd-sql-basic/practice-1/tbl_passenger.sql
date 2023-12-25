SELECT * FROM tbl_passenger;
SELECT * FROM tbl_passenger WHERE age > 23;
ALTER TABLE tbl_passenger
	ADD COLUMN sex CHAR;
INSERT INTO tbl_passenger (first_name, last_name, age, disease_record, departure, arrival, sex) 
	VALUES ('ibra', 'suraya', 22, 'diabetes', 'Jakarta', 'Tegal', 'laki-laki');
DELETE FROM tbl_passenger
	WHERE first_name = 'ibra' AND last_name = 'suraya';
UPDATE tbl_passenger SET no = 7 WHERE no = 10;


INSERT INTO tbl_passenger (first_name, last_name, age, disease_record, departure, arrival, sex) 
	VALUES ('Fransisca ', 'Prahastuti ', 31, 'Tidak Ada', 'Surabaya', 'Bali', 'perempuan');

