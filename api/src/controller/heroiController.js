import { Router } from "express";
import { deleteheroe, inserheroe, voador} from "../repository/heroiRepository.js";

const server = Router();

server.post('/heroi', async (req, resp) => {
    const get = req.body;
    const send = await inserheroe(get);
    resp.status(204).send();
})

server.delete('/heroi/:id', async (req, resp) => {
    const id = req.params.id;
    const snd = deleteheroe(id);
    resp.status(204).send();
})

server.get('/heroi/filtro', async (req, resp) => {
    try {
        const voa = Boolean(req.query.voa);
        const snd = await voador(voa);
        resp.send(snd);
    } catch (err) {
        resp.send(err.message);
    }
})

export default server;