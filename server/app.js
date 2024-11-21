const mysql     = require('mysql2');
const dotenv    = require("dotenv");
const express   = require("express");
const cors      = require("cors");
dotenv.config();

const pool = mysql
    .createPool({
        host    : process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user    : process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_ROOT_PASSWORD
    })
    .promise();

/**
 * @description Get All users
 * @route GET / users
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns a 200 status if correct
 */
const getAllUsers = (
    async function (req, res, next) {
        let sql = "SELECT * from user";
        const [rows] = await pool.query(sql);
        if (!rows.length) return res.status(200).json({ users: [] });

        return res.status(200).json({ users: rows });
    }
)

/**
 * @description Create a new user
 * @route POST /users
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns a 201 status if successful
 */
const createUser = async (req, res, next) => {
    const { firstName, lastName, email, birthday, city, postalCode } = req.body;

    if (!firstName || !lastName || !email || !birthday || !city || !postalCode) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const sql = `
            INSERT INTO user (firstName, lastName, mail, birthday, city, postalCode)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await pool.query(sql, [firstName, lastName, email, birthday, city, postalCode]);
        return res.status(201).json({ message: "User created", userId: result.insertId });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


const router = express.Router();

router.route("/")
    .get(getAllUsers)
    .post(createUser);

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