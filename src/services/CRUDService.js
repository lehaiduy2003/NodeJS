const connection = require('../configs/Database')

const getAllUsers = async () => {
    let [results, fields] = await (await connection).execute('SELECT * FROM User')
    return results;
}

const createUser = async (req, res) => {
    let [results, fields] = await (await connection).execute(
        `INSERT INTO User (email, name, city)
        VALUES(?, ?, ?)`,
        [req.body.email, req.body.name, req.body.city])

    return results
}

const updateUser = async (req, res) => {
    let [results, fields] = await (await connection).execute(
        `UPDATE User u
        SET u.email = ?, u.name = ?, u.city = ?
        WHERE u.id = ?`,
        [req.body.email, req.body.name, req.body.city, req.params.id])

    return results
}

const getUpdateUser = async (req, res) => {
    let [results, fields] = await (await connection).execute(`SELECT * FROM User u
        WHERE u.id = ?`, [req.params.id])
    return results
}

module.exports = {
    getAllUsers, createUser, getUpdateUser, updateUser
}