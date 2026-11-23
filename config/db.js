const db = require('../models');

async function connectionDatabase() {
    try{
        await db.sequelize.authenticate();
        console.log('Database connection has been established succesfully.');

        await db.sequelize.sync({alter: true});
        console.log('Database syncronized successfully.');
        
    } catch (err) {
        console.error('Unable to connect to the database:', err.message);
        process.exit(1);
    }
}

module.exports = connectionDatabase;