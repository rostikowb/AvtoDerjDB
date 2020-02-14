import streamToLine from './splitStreamToLine'
import states from './states'
import * as fs from 'fs'

export default async (pathName) => {

    // Starting the function to add file contents
    try {
        let nameArr = pathName;
        let i = pathName.length;
        let res;

        const rec = async () => {
            try {
                i--;
                console.log(i);
                res = await streamToLine('./temp/' + nameArr[i]);

                await fs.unlinkSync('./temp/' + nameArr[i]);
            } catch (e) {
                states.resultObj.false.push(nameArr[i]);
            }

            if (res) {
                states.resultObj.true.push(nameArr[i]);
            } else {
                states.resultObj.false.push(nameArr[i]);
            }

            if (i) {
                await rec()
            } else {
                states.run = false;
            }
        };
        await rec();
    }catch (e) {
        states.run = false;
    }
}