import { Router } from "express";
import { deleteheroe, inserheroe} from "../repository/heroiRepository.js";

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

export default server;