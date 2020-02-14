import start from './module/startAddToBdAllFile'
import getPath from './module/getAllPath'
import states from './module/states'

export default async (req, res, next) => {

    try {
        if (states.run) {
            return res.status(400).json({result: false, msg: 'already running'});
        }

        // The first function gets the paths and the second one starts adding them to the database.
        getPath().then(path => {
            if(path.length){
                states.run = true;
                start(path)
            }
        }).catch(err => {
            return res.status(500).json({result: false, msg: err});
        });

        res.status(200).json({result: true, msg: 'start'});

    } catch (e) {
        console.log(e);
        next(e);
    }
}