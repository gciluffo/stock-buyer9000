//Require the dev-dependencies
const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../dist/server');
let should = chai.should();


chai.use(chaiHttp);

describe('Stocks', () => {

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