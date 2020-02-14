import Info from '../../../models/infoModel';


export default async (data) => {
    await new Promise((resolve) => {

        // Adds to the recording database in groups
        Info.insertMany(data, {ordered: false}, (res) => {
            try {
                if (res.result.result.nInserted < 9700) {
                    Info.insertMany(data, {ordered: false}, () => {
                        resolve(true)
                    })
                } else {
                    resolve(true)
                }
            } catch (e) {
                Info.insertMany(data, {ordered: false}, (reres) => {
                    try {
                        if (reres.result.result.nInserted < 9700) {
                            Info.insertMany(data, {ordered: false}, () => {
                                resolve(true)
                            })
                        } else {
                            resolve(true)
                        }
                    } catch (e) {
                        resolve(true)
                    }
                })
            }
        });
    })
}


