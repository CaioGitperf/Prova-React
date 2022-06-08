create database ficcaoDB;

use ficcaoDB;

create table tb_vilao (
				id_vilao	           int primary key auto_increment,
				nm_vilao               varchar(20),
                ds_poder               varchar(4000),
			    ds_personalidade       varchar(4000),
				bt_avoa                bool
);

create table tb_heroi(
				id_heroi	           int primary key auto_increment,
				nm_heroi               varchar(20),
                ds_poder               varchar(4000),
			    ds_personalidade       varchar(4000),
				bt_avoa                bool
);


