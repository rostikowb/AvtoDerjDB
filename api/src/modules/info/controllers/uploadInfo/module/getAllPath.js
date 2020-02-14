import * as fs from 'fs'

export default async () => {

    // Returns the paths of all files in the folder where files from the server come
    return await new Promise((resolve, reject) => {
        fs.readdir('./temp', (err, item) => {
            if (err) {
                reject(err)
            } else {
                resolve(item)
            }
        })
    });
}