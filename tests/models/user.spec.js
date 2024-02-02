const { User, conn } = require('../../src/db.js');
const chai = require('chai');



const assert = chai.assert;

describe('User Model', () => {
    it('Deberia registar un usuario con los atributos correctos', () => {
        const username = "john.doe";
        const email = "john.doe@example.com";
        const password = "password123";

        const user = new User({username, email, password});

        assert.equal(user.username, username);
        assert.equal(user.email, email);
        assert.equal(user.password, password);

    });
});



