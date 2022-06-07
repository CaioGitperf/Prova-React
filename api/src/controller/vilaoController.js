import { Router } from "express"
import { deletevile, inservile } from "../repository/vilaoRepository.js"

const server = Router();

server.post('/vilao', async (req, resp) => {
    const get = req.body;
    const send = await inservile(get);
    resp.status(204).send();
})

server.delete('/vilao/:id', async (req, resp) => {
    const id = req.params.id;
    const snd = deletevile(id);
    resp.status(204).send();
})

export default server;