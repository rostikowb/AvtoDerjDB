import * as fs from 'fs'
import states from './module/states'

export default async (req, res, next) => {
    try {

        // after checks, files are saved
        let fileName = req.headers.name;
        let write;

        if (states.run) {
            return res.status(400).json({result: false, msg: 'Already running'});
        }

        if (!(states.resultObj.true.indexOf(fileName) === -1)) {
            return res.status(400).json({result: false, msg: 'This file(-s) has recently been successfully added to the database.'});
        }

        if (!(/\.csv$/i.test(fileName))) {
            return res.status(400).json({result: false, msg: 'This file(-s) extension is not .csv'});
        }

        write = fs.createWriteStream(`./temp/${req.headers.name}`);
        await req.pipe(write);

        req.on('end', () => {
            res.status(200).json({result: true})
        });

        req.on('error', () => {
            res.status(500).json({result: false})
        });

    } catch (e) {
        console.log(e);
        next();
    }


}
