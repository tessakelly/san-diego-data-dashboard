import { Request, Response } from 'express';

const Pool = require('pg').Pool
const secrets = require('../secret-config.json');
const pool = new Pool({
  user: secrets.database.user,
  host: secrets.database.host,
  database: secrets.database.database,
  password: secrets.database.password,
  port: secrets.database.port,
})

//const { Sequelize } = require('sequelize');

const getCollisionsByMonth = (req: Request, res: Response) => {
    pool.query("select date_trunc('month', date_time) as mon, sum(injured) as mon_injured, sum(killed) as mon_killed, count(*) as total from collisions group by mon order by mon", (error: any, results: any) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getCollisionsByMonth
}