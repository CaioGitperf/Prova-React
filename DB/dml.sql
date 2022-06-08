use ficcaoDB;

SELECT  id_vilao	        id,
		nm_vilao            nome,
		ds_poder            poder,
		ds_personalidade    persona,
		bt_avoa             avoa
		FROM tb_vilao;
        
INSERT INTO tb_vilao(nm_vilao, ds_poder, ds_personalidade, bt_avoa)
	VALUES ("Ednaldo Pereira","Seus poderes sao ilimitados, ja chegou a morar dentro de uma ana vermelha","rabugento, arrogante __ criou o universo em 5 horas", true);
                            
DELETE FROM tb_vilao
	  WHERE id_vilao = 1;
	
SELECT  id_vilao	     	id,
	    nm_vilao         	nome,
		ds_personalidade    persona,
		bt_avoa             avoa
FROM                   		tb_vilao
WHERE                  		bt_avoa	= true;








SELECT  id_heroi        id,
		nm_heroi            nome,
		ds_poder            poder,
		ds_personalidade    persona,
		bt_avoa             avoa
		FROM tb_heroi;


  
        
INSERT INTO tb_vilao(nm_heroi, ds_poder, ds_personalidade, bt_avoa)
	VALUES ("Ednaldo Pereira","Seus poderes sao ilimitados, ja chegou a morar dentro de uma ana vermelha","rabugento, arrogante __ criou o universo em 5 horas", true);





DELETE FROM tb_vilao
	  WHERE id_vilao = 1;
	


SELECT  id_heroi	     	id,
	    nm_heroi         	nome,
		ds_personalidade    persona,
		bt_avoa             avoa
FROM                   		tb_heroi
WHERE                  		bt_avoa	= false;