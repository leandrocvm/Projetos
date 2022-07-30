import express, { Request, Response} from 'express';

const server = express();

server.get('/',(request: Request, response:Response) => {


    return response.json({mensagem: 'Bem vindo'})

})

server.listen(5000, () => {
    console.log('servidor on na porta 5000 http://localhost:5000/')
    
})


