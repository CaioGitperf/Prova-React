import { con } from "./connection.js";

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