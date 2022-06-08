import { Router } from "express"
import { deletevile, inservile, voador, showing} from "../repository/vilaoRepository.js"

const server = Router();

server.post('/vilao', async (req, resp) => {
    const get = req.body;
    const send = await inservile(get);
    if (!send.nome) throw new Error('CAMPO AVOA É OBRIGATÓRIO');
    if (!send.poder) throw new Error('CAMPO PODER É OBRIGATÓRIO, CASO NÃO POSSUA ESCREVA {NENHUM}');
    if (!send.persona) throw new Error('CAMPO PERSONALIDADE É OBRIGATÓRIO');
    resp.status(204).send();
})

server.get('/vilao', async (req, resp) => {
    const send = await showing();
    resp.send(send);
})

server.delete('/vilao/:id', async (req, resp) => {
    const id = req.params.id;
    const snd = deletevile(id);
    resp.status(204).send();
})

server.get('/vilao/filtro', async (req, resp) => {
    try {
        const voa = Boolean(req.query.voa);
        const snd = await voador(voa);
        resp.send(snd);
    } catch (err) {
        resp.send(err.message);
    }
})


export default server;