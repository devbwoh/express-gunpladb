"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = express_1.default();
const dbc = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql1234',
    database: 'gunpladb'
});
dbc.connect();
app.listen('3000', () => {
    console.log('Server Started');
});
app.get('/', (req, res) => {
    const query = 'select * from mechanic';
    dbc.query(query, (err, rows) => {
        if (err)
            return console.log(err);
        res.send(rows);
    });
});
