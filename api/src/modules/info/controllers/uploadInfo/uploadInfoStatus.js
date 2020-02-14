import states from './module/states'

export default async (req, res, next) => {

    // function for checking the status of adding to the database
    try {
        res.status(200).json(states.resultObj);
    } catch (e) {
        console.log(e);
        next(e);
    }
}