const { User } = require('../models');

const userData = [{
        username: 'Test',
        password: 'test123'

    },
    {
        username: 'Boon',
        password: 'boon123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;