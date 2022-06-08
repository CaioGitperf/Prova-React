import { con } from "./connection.js";


export async function showing() {
    const comando = `SELECT id_heroi	        id,
                            nm_heroi            nome,
                            ds_poder            poder,
                            ds_personalidade    persona,
                            bt_avoa             avoa
                            FROM tb_heroi`;
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function inserheroe(ficha) {
    const comando = `INSERT INTO tb_heroi(nm_heroi, ds_poder, ds_personalidade, bt_avoa)
                            VALUES (?,?,?,?)`;
    const [resposta] = await con.query(comando, [ficha.nome, ficha.poder, ficha.persona, ficha.avoa]);
    ficha.id = resposta.insertId;
    return resposta;
}

export async function deleteheroe(id) {
    const comando = `DELETE FROM tb_heroi
                           WHERE id_heroi = ?`;
    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function voador(voa) {
    const comando = `SELECT  id_heroi	        id,
                             nm_heroi             nome,
                             ds_personalidade    persona,
                             bt_avoa             avoa
                             FROM    tb_heroi
                             WHERE   bt_avoa			= ?`;
    const [resposta] = await con.query(comando, [voa]);
    if (!resposta) throw new Error("Item inexistente");
    return resposta;
}