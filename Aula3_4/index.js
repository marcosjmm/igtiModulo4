require('dotenv').config();

if (process.env.PRD !== 'true') console.log(process.env.USERDB);