'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');

suite('part4 routes favorites', () => {
  const agent = request.agent(server);

  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        request(server)
          .post('/session')
          .set('Content-Type', 'application/json')
          .send({
            email: 'jkrowling@gmail.com',
            password: 'youreawizard'
          })
          .end((err, res) => {
            if (err) {
              return done(err);
            }

            agent.saveCookies(res);
            done();
          });
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /favorites', (done) => {
    /* eslint-disable max-len */
    agent
      .get('/favorites')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        bookId: 1,
        userId: 1,
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z',
        title: 'JavaScript, The Good Parts',
        author: 'Douglas Crockford',
        genre: 'JavaScript',
        description: 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.',
        coverUrl: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/284/javascript_the_good_parts.jpg'
      }], done);

      /* eslint-enable max-len */
  });

  test('GET /favorites/check?bookId=1', (done) => {
    agent
      .get('/favorites/check?bookId=1')
      .expect('Content-Type', /json/)
      .expect(200, 'true', done);
  });

  test('GET /favorites/check?bookId=2', (done) => {
    agent
      .get('/favorites/check?bookId=2')
      .expect(200, 'false', done);
  });

  test('POST /favorites', (done) => {
    agent
      .post('/favorites')
      .set('Content-Type', 'application/json')
      .send({ bookId: 2 })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, { id: 2, bookId: 2, userId: 1 }, done);
  });

  test('DELETE /favorites', (done) => {
    agent
      .delete('/favorites')
      .set('Content-Type', 'application/json')
      .send({ bookId: 1 })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, { bookId: 1, userId: 1 }, done);
  });
});
