CREATE TABLE tbl_infoBus2 (
	kode_bus CHAR(6) UNIQUE,
	nama_sopir CHAR(6) NOT NULL,
	terakhir_dilihat CHAR(6) NOT NULL,
	warna_bus CHAR(6),
	aktivitas_bus CHAR(6) NOT NULL,
	PRIMARY KEY (kode_bus)
);