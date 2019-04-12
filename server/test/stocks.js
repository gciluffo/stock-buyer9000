//Require the dev-dependencies
const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../dist/server');
let should = chai.should();


chai.use(chaiHttp);

describe('GET Stocks', () => {

  describe('/GET status', () => {
      it('it should return a 200', (done) => {
        chai.request(server)
            .get('/status')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
  });

});

describe('POST Stocks', () => {

  describe('POST /stocks/purchases without ticker or amount should not create', () => {
      it('it should return a 400', (done) => {
        const purchase = {
            ticker: "OBP"
        }

        chai.request(server)
            .post('/stocks/purchases')
            .send(purchase)
            .end((err, res) => {
                  res.should.have.status(400);
              done();
            });
      });
  });

  describe('POST /stocks/purchases with correct data should create', () => {
      it('it should return a 201', (done) => {
        const purchase = {
            ticker: "OBP",
            amount: "999.99"
        }

        chai.request(server)
            .post('/stocks/purchases')
            .send(purchase)
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  res.body.should.have.property('ticker');
                  res.body.should.have.property('amount');
                  res.body.should.have.property('createdDate');
                  res.body.should.have.property('id');
              done();
            });

            // TODO: Mock out DB when inserting test data
      });
  });

});