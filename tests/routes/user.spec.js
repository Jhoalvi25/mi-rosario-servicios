/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { User, conn } = require('../../src/db.js');

const agent = session(app);
const user = {
  name: 'New people register',
};

describe('User routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => User.sync({ force: true })
    .then(() => User.create(user)));
  describe('Post /register', () => {
    it('should get 200', () =>
      agent.get('/register').expect(200)
    );
  });
});
