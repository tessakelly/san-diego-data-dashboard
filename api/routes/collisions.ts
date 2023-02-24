import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import makeHandlerAwareOfAsyncErrors from '../middleware/makeHandlerAwareOfAsyncErrors';
import { Collision } from "../sequelize/models/collision.model";

var router = express.Router();

router.get('/', makeHandlerAwareOfAsyncErrors(async (req: Request, res: Response) => {
    const result: any = await Collision.findAll({
        raw: true,
        group: ['mon'],
        order: ['mon'],
        attributes: [[Sequelize.fn('date_trunc', 'month', Sequelize.col('date_time')), 'mon'], [Sequelize.fn('sum', Sequelize.col('injured')), 'mon_injured'], [Sequelize.fn('sum', Sequelize.col('killed')), 'mon_killed'], [Sequelize.fn('count', Sequelize.col('date_time')), 'total']]
    });
    res.send(result);
}));

export default router;