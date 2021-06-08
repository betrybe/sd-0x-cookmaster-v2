const chai = require('chai');
// const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');

const { MongoClient } = require('mongodb');
// const { MongoMemoryServer } = require('mongodb-memory-server');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
    describe('quando o login é feito com sucesso', () => {
        // let response = {};
        // const DBServer = new MongoMemoryServer();

        before(async () => {
            // local:
            const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';

            // avaliador:
            // const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';

            const DB_NAME = 'Cookmaster';

            const OPTION = {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            };

            const connection = async () => MongoClient
                .connect(MONGO_DB_URL, OPTION)
                .then((conn) => conn.db(DB_NAME))
                .catch((err) => {
                  console.error(err.message);
                  process.exit();
                });
        });

        // after(async () => {
            // MongoClient.connect.restore();
            // await DBServer.stop();
        // })

        it('retorna o código de status 200', async () => {
          const response = await chai.request(server)
            .post('/login')
            .send({
              "email": "erickjacquin@gmail.com",
              "password": "12345678"
            });

          expect(response).to.have.status(200);
        });
    });
});
