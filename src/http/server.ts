import fastify from "fastify";


const app = fastify();

app.listen({port:4001}).then(()=>console.log('Servidor Rodando!'))