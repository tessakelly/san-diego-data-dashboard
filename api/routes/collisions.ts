import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import makeHandlerAwareOfAsyncErrors from '../middleware/makeHandlerAwareOfAsyncErrors';
import { Collision } from "../sequelize/models/collision.model";
import { parse, Options as ParseOptions } from 'csv-parse';
import snakeCaseToCamelCase from '../utilities/snakeCaseToCamelCase';
import { DATA_URLS } from '../constants';
import { promisify } from 'util';

var router = express.Router();

router.get('/', makeHandlerAwareOfAsyncErrors(async (req: Request, res: Response) => {
    const result: any = await Collision.findAll({
        raw: true,
        group: ['mon'],
        order: ['mon'],
        attributes: [
            [Sequelize.fn('date_trunc', 'month', Sequelize.col('date_time')), 'mon'],
            [Sequelize.fn('sum', Sequelize.col('injured')), 'mon_injured'],
            [Sequelize.fn('sum', Sequelize.col('killed')), 'mon_killed'],
            [Sequelize.fn('count', Sequelize.col('date_time')), 'total']]
    });
    res.send(result);
}));

router.get('/charges', makeHandlerAwareOfAsyncErrors(async (req: Request, res: Response) => {
    const result: any = await Collision.findAll({
        raw: true,
        group: ['charge_desc'],
        order: [['num', 'desc']],
        attributes: [
            'charge_desc',
            [Sequelize.fn('count', Sequelize.col('charge_desc')), 'num']
        ]
    });
    const NUM_CHARGES_TO_RETURN = 9;
    let simplifiedResult = result.slice(0, NUM_CHARGES_TO_RETURN).map((x: any) => ({
        charge_desc: x.charge_desc[0] + x.charge_desc.substring(1).toLowerCase(),
        count: parseInt(x.num)
    }));

    const otherCount = result.slice(NUM_CHARGES_TO_RETURN).reduce(
        (accumulator: number, currentValue: any) => accumulator + parseInt(currentValue.num),
        0
    );
    simplifiedResult.push({
        charge_desc: 'Other',
        count: otherCount
    });

    res.send(simplifiedResult);
}));

router.post('/import', makeHandlerAwareOfAsyncErrors(async (req: Request, res: Response) => {
    const fetchResponse = await fetch(DATA_URLS.COLLISIONS);
    const file = await fetchResponse.text();
    const promisifiedParse = promisify<string, ParseOptions, any[]>(parse);
    const records = await promisifiedParse(file, {
        columns: header => header.map((column: string) => snakeCaseToCamelCase(column)),
        cast: true
    });

    await Collision.bulkCreate(records, {
        returning: false,
        ignoreDuplicates: true
    });
    res.send('Ok');
}));

export default router;