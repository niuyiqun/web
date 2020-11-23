const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'webteach',
    prefix: '',
    encoding: 'utf8',
    host: '202.194.14.120',
    port: '3306',
    user: 'webteach',
    password: 'webteach',
    dateStrings: true
};
