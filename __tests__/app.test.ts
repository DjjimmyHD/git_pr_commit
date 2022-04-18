import supertest from 'supertest';
import app from '../app'


describe('Should get a 200 response on /', function(): void {
  it('gets the test endpoint',function(done) {
    supertest(app)
      .get('/')
      .expect(200, done);
  });
});

describe('Checks for github api being up/', function(): void {
  it('should return recive data and get and 200',function(done) {
    supertest(app)
      .get('/test')
      .expect('Content-length',	'2262')
      .expect(200, done);
  });
});
