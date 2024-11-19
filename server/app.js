const mysql     = require('mysql2');
const dotenv    = require("dotenv");
const express   = require("express");
const cors      = require("cors");
dotenv.config();

const pool = mysql
    .createPool({
        host    : process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_ROOT_PASSWORD
    })
    .promise();

/**
 * @description Get All note
 * @route GET / users
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const getAllUsers = (
    async function (req, res, next) {
        let sql = "SELECT * from user";
        const [rows] = await pool.query(sql);
        if (!rows.length) return res.status(200).json({ users: [] });

        return res.status(200).json({ users: rows });
    }
)

const router = express.Router();

router.route("/").get(getAllUsers);

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// api routes
app.use("/users", router);

module.exports = app;

// var connection  = mysql.createConnection({
//     user        : 'root',
//     password    : 'my-secret-pw',
//     database    : 'ynov_ci'
// });
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connecté à la base de donnée MySQL !");
// });
// connection.query('SELECT * FROM user', function(error, results, fields) {
//     if (error) throw error;
//     console.log('Nb users: ', results.length);
// });
// connection.end();