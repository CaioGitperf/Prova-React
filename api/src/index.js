import "dotenv/config"
import cors from "cors"
import express from "express"
import heroe from "./controller/heroiController.js"
import vilao from "./controller/vilaoController.js"

const server = express();
server.use(cors());
server.use(express.json());
server.use(heroe);
server.use(vilao);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));