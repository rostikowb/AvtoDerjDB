import {Schema, model} from 'mongoose';

const InfoSchema = new Schema(
    {
        // _id: Schema.Types.ObjectId,
        hash: {type: String, unique: true},
        person: {type: String},
        reg_addr_koatuu: {type: Number},
        oper_code: {type: Number},
        oper_name: {type: String},
        d_reg: {type: String},
        dep_code: {type: Number},
        dep: {type: String},
        brand: {type: String},
        model: {type: String},
        make_year: {type: Number},
        color: {type: String},
        kind: {type: String},
        body: {type: String},
        purpose: {type: String},
        fuel: {type: String},
        capacity: {type: Number},
        own_weight: {type: Number},
        total_weight: {type: Number},
        n_reg_new: {type: String, index: true, required: true},

    },
);

export default model('info', InfoSchema);