import Info from '../../models/infoModel';

export default (req, res) => {

    if(!req.query.num){
        return res.status(400).json({status: false, msg: 'invalid num'});
    }

    const number = req.query.num;
    Info.find({n_reg_new: number}).then(result => {
        if (result.length >= 1) {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)
        }
    }).catch(err => {
        res.status(500).json(err)
    });
};