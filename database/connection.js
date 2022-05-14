const { Pool } = require ( 'pg' );

const pool = new Pool({
    user    : process.env.USER_DATABASE,
    host    : process.env.USER_HOST,
    password: process.env.USER_PASS,
    database: process.env.NAME_DATABASE,
    port    : process.env.PORT_DATABASE
})

module.exports = {
    pool
}