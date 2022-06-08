import { con } from "./connection.js";


export async function showing() {
    const comando = `SELECT id_vilao	        id,
                            nm_vilao            nome,
                            ds_poder            poder,
                            ds_personalidade    persona,
                            bt_avoa             avoa
                            FROM tb_vilao`;
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function inservile(ficha) {
    const comando = `INSERT INTO tb_vilao(nm_vilao, ds_poder, ds_personalidade, bt_avoa)
                            VALUES (?,?,?,?)`;
    const [resposta] = await con.query(comando, [ficha.nome, ficha.poder, ficha.persona, ficha.avoa]);
    ficha.id = resposta.insertId;
    return ficha;
}

export async function deletevile(id) {
    const comandos = `DELETE FROM tb_vilao
                            WHERE id_vilao = ?`;
    const [resposta] = await con.query(comandos, [id]); 
    return resposta;
}

export async function voador(voa) {
    const comando = `SELECT  id_vilao	            id,
                             nm_vilao               nome,
                             ds_personalidade       persona,
                             bt_avoa                avoa
                             FROM                   tb_vilao
                             WHERE                  bt_avoa	= ?`;
    const [resposta] = await con.query(comando, [voa.voa]);
    return resposta;
}

