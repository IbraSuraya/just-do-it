SELECT * FROM tbl_infoBus WHERE nama_sopir = "Budi Prakoso";
SELECT * FROM tbl_infoBus WHERE kode_bus = 'AS_30';
DELETE FROM tbl_infoBus
	WHERE kode_bus = 'JAN_17';
UPDATE tbl_infoBus SET kode_bus = 'GAL_11' WHERE kode_bus = 'AS_30';
SELECT * FROM tbl_infoBus 
	WHERE nama_sopir = 'Roni' AND warna_bus = "Merah";
	
CREATE INDEX info_bus_terakhir_dilihat_idx
	ON tbl_infoBus (terakhir_dilihat);
SELECT * FROM tbl_infoBus WHERE terakhir_dilihat = "Bandung";
PRAGMA index_list('tbl_infoBus');
PRAGMA index_info('info_bus_terakhir_dilihat_idx');