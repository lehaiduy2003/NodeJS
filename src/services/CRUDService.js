const connection = require('../configs/Database')

const getAllUsers = async () => {
    let [results, fields] = await (await connection).execute('SELECT * FROM User')
    return results;
}

const createUser = async (email, name, city) => {
    let [results, fields] = await (await connection).execute(
        `INSERT INTO User (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city])

    return results
}

const updateUser = async (email, name, city, id) => {
    console.log([email, name, city])
    let [results, fields] = await (await connection).execute(
        `UPDATE User u
        SET u.email = ?, u.name = ?, u.city = ?
        WHERE u.id = ?`,
        [email, name, city, id])

    return results
}

const deleteUser = async (id) => {
    let [results, fields] = await (await connection).execute(
        `DELETE FROM User u WHERE u.id = ?`, [id])

    return results
}

const getUser = async (id) => {
    let [results, fields] = await (await connection).execute(`SELECT * FROM User u
        WHERE u.id = ?`, [id])
    return results
}

module.exports = {
    getAllUsers, createUser, getUser, updateUser, deleteUser
}