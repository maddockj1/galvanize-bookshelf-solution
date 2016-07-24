'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');

suite('part2 routes authors', () => {
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
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /authors', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/authors')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        firstName: 'Alex',
        lastName: 'Martelli',
        biography: 'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He\'s a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Goteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex\'s proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 3,
        firstName: 'Allen B.',
        lastName: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 2,
        firstName: 'Anna',
        lastName: 'Ravenscroft',
        biography: 'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 4,
        firstName: 'Bonnie',
        lastName: 'Eisenman',
        biography: 'Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 11,
        firstName: 'Chris',
        lastName: 'Mayfield',
        biography: 'Chris Mayfield is an Assistant Professor of Computer Science at James Madison University. He has a Ph.D. in Computer Science from Purdue University and Bachelor\'s degrees in CS and German from the University of Utah. His research focuses on CS education and K-12.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/ethan_brown.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 7,
        firstName: 'David',
        lastName: 'Flanagan',
        biography: 'David Flanagan is a computer programmer who spends most of his time writing about JavaScript and Java. His books with O\'Reilly include JavaScript: The Definitive Guide, JavaScript Pocket Reference, Java in a Nutshell, Java Examples in a Nutshell, and Java Foundation Classes in a Nutshell.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/george_heineman1.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 10,
        firstName: 'Ethan',
        lastName: 'Brown',
        biography: 'Ethan Brown is a senior software engineer at Pop Art, a Portland-based interactive marketing agency, where he is responsible for the architecture and implementation of web sites and web services for clients ranging from small businesses to international enterprise companies. He has over twenty years of programming experience, from embedded to the web, and has embraced the JavaScript stack as the web platform of the future.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/ethan_brown.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 6,
        firstName: 'George',
        lastName: 'Heineman',
        biography: 'George T. Heineman is an Associate Professor of Computer Science at WPI. His research interests are in Software Engineering. He co-edited the 2001 book "Component-Based Software Engineering: Putting the Pieces Together". He was the Program Chair for the 2005 International Symposium on Component-Based Software Engineering.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/george_heineman1.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 8,
        firstName: 'Jay',
        lastName: 'McGavren',
        biography: 'Jay McGavren was doing automation for a hotel services company when a colleague introduced him to Programming Perl (a.k.a. the Camel Book). It made him an instant Perl convert, as he liked actually writing code instead of waiting for a 10-person development team to configure a build system. It also gave him the crazy idea to write a technical book someday.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/jay_mcgavren1.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 12,
        firstName: 'Julia',
        lastName: 'Elman',
        biography: 'Julia Elman is a designer, developer, author, speaker and tech education advocate based in North Carolina and has been working her brand of web skills since 2002. Her creative nature drove her to find work at Hallmark Cards, Inc in 2007 where she worked on projects such as the Product (RED) campaign and Hallmark\'s site re-design. From there, she took a dive into Django as a Junior Designer/Developer at World Online in Lawrence, KS. In early 2013, she helped start a local chapter of Girl Develop It and empowered over 1000 members to learn computer programming. She also helped organize the 2013 Teen Tech Camp, where 20 local teens learned Python programming in a one-day event.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/julia_elman-1.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 5,
        firstName: 'Kyle',
        lastName: 'Simpson',
        biography: 'Kyle Simpson is an Open Web Evangelist who\'s passionate about all things JavaScript. He\'s an author, workshop trainer, tech speaker, and OSS contributor/leader.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }, {
        id: 9,
        firstName: 'Shyam',
        lastName: 'Seshadri',
        biography: 'Currently based out of India, Shyam Seshadri is the CEO of Fundoo Solutions (http://www.befundoo.com), Ex-Googler, Author and Chef. He currently spends his time working on interesting product ideas, conducting training sessions internationally on AngularJS & NodeJS, and providing development and architecture consulting on AngularJS, NodeJS and Mobile applications. He conducts extensive, customized two and three day, hands-on workshops for AngularJS & NodeJS, which have been well received internationally.',
        portraitUrl: 'http://cdn.oreillystatic.com/images/people/154/shyam_seshadri-1.jpg',
        createdAt: '2016-06-26T14:26:16.000Z',
        updatedAt: '2016-06-26T14:26:16.000Z'
      }], done);

      /* eslint-enable max-len */
  });

  test('GET /authors/:id', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/authors/3')
      .expect('Content-Type', /json/)
      .expect(200, {
        id: 3,
        firstName: 'Allen B.',
        lastName: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg',
        createdAt: new Date('2016-06-26 14:26:16 UTC').toISOString(),
        updatedAt: new Date('2016-06-26 14:26:16 UTC').toISOString()
      }, done);

      /* eslint-enable max-len */
  });

  test('POST /authors', (done) => {
    /* eslint-disable max-len */
    request(server)
      .post('/authors')
      .send({
        firstName: 'Allen B.',
        lastName: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 13,
        firstName: 'Allen B.',
        lastName: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
      }, done);

      /* eslint-enable max-len */
  });

  test('PATCH /authors/:id', (done) => {
    /* eslint-disable max-len */
    request(server)
      .patch('/authors/2')
      .send({
        firstName: 'Allen B.',
        lastName: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        firstName: 'Allen B.',
        lastName: 'Downey',
        biography: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
      }, done);

      /* eslint-enable max-len */
  });

  test('DELETE /authors/:id', (done) => {
    /* eslint-disable max-len */
    request(server)
      .del('/authors/2')
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        firstName: 'Anna',
        lastName: 'Ravenscroft',
        biography: 'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.',
        portraitUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'
      }, done);

      /* eslint-enable max-len */
  });

  test('GET /authors/:id/books', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/authors/2/books')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        authorId: 2,
        title: 'Python In A Nutshell',
        genre: 'Python',
        description: 'This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.',
        coverUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg',
        createdAt: new Date('2016-06-26 14:26:16 UTC').toISOString(),
        updatedAt: new Date('2016-06-26 14:26:16 UTC').toISOString()
      }, {
        id: 2,
        authorId: 2,
        title: 'Think Python',
        genre: 'Python',
        description: 'If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.',
        coverUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg',
        createdAt: new Date('2016-06-26 14:26:16 UTC').toISOString(),
        updatedAt: new Date('2016-06-26 14:26:16 UTC').toISOString()
      }], done);

      /* eslint-enable max-len */
  });
});
