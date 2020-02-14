import myCsvParser from "./stringToObj";
import readline from "readline";
import * as fs from "fs";
import addToDB from "./addLineToDB";

export default async (path) => {

    // line by line parsing file
    return await new Promise((resolve) => {
        let i = 0;
        let arr = [];
        let readable = fs.createReadStream(path, {highWaterMark: 200});
        let rl = readline.createInterface({
            input: readable
        });

        rl.on('line', async (line) => {
            rl.pause();
            let obj = await myCsvParser(line);
            if (obj.result) {
                arr.push(obj.data);
                if (i === 10000 - 1) {
                    addToDB(arr).then(()=>{
                        arr = [];
                        i = 0;
                        rl.resume()
                    })
                } else {
                    i++;
                    rl.resume();
                }
            } else {
                rl.resume();
            }
        });

        rl.on('close', async () => {
            let res = await addToDB(arr);
            arr = [];
            i = 0;
            console.log(res);

            console.log('rl end');
            await resolve(true);
        });

        rl.on('error', err => {
            console.log('error rl', err);
            resolve(false);
            // return false;
        });
    });
}