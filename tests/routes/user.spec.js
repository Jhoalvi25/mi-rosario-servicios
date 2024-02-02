/* eslint-disable import/no-extraneous-dependencies */
const app = require('../../src/app.js');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);


const expect = chai.expect;

describe('Registration Route', () => {
    it('Deberia registrar un usuario con los datos correctos', (done) => {
        const user = {
            username: 'john.doe',
            email: 'john.doe@example.com',
            password: 'password123',
        };

        chai.request(app)
            .post('/api/register')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message').equals('Usuario registrado correctamente');
                done();
            });
    });
});
