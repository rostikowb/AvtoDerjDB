import md5 from "md5";

export default async (data) => {

// line splitting and validation before writing
    return await new Promise((resolve) => {
        try {
            let arrItem = data.replace(/"/g, '').split(';');
            let hashStr = md5(data);

            if (arrItem.length !== 19) {
                resolve({result: false, data: null});
            } else {
                let obj = {
                    hash: hashStr,
                    person: arrItem[0],
                    reg_addr_koatuu: arrItem[1],
                    oper_code: arrItem[2],
                    oper_name: arrItem[3],
                    d_reg: arrItem[4],
                    dep_code: arrItem[5],
                    dep: arrItem[6],
                    brand: arrItem[7],
                    model: arrItem[8],
                    make_year: arrItem[9],
                    color: arrItem[10],
                    kind: arrItem[11],
                    body: arrItem[12],
                    purpose: arrItem[13],
                    fuel: arrItem[14],
                    capacity: arrItem[15],
                    own_weight: arrItem[16],
                    total_weight: arrItem[17],
                    n_reg_new: arrItem[18]
                };

                Object.keys(obj).forEach(key => {
                    if (obj[key] === 'NULL') {
                        obj[key] = null;
                    }
                });

                resolve({result: true, data: obj})
            }
        } catch (e) {
            console.log(e);
            resolve({result: false})
        }
    });
}