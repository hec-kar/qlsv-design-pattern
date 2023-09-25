'use strict'
const mysql = require("mysql2");

class Database {
    constructor() {
        this.connect;
    }

    connect({ host, user, password, database }) {
        if (this.connection) {
            throw new Error('Database is already connected');
        }

        this.connection = mysql.createConnection({
            host,
            user,
            password,
            database
        });

        this.connection.connect((err) => {
            if (err) {
                throw err;
            }
            console.log('Connected to database');
        });
    }

    static getInstance({ host, user, password, database }) {
        if (!Database.instance) {
            Database.instance = new Database();
            Database.instance.connect({ host, user, password, database });
        }

        return Database.instance;
    }


}

module.exports = Database;
