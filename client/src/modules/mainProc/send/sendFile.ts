import 'any-promise/register/q';
import * as fs from "fs";
import * as path from "path";
import * as request from "request";
import shortHash from "short-hash";

export default async (file: any) => {

// adding a password, a hashed name and the file itself, we send a request to the server
    const url:string = 'http://185.209.28.127:5000/uploads';
    const readable = fs.createReadStream(file);
    const formData:object = {file: readable};
    let nameOriginal:string = path.basename(file);
    let nameHax:string = shortHash(nameOriginal);

    readable.on('error', (error)=>{
        console.log(error);
        return false;
    });

    if(!(/\.csv$/i.test(nameOriginal))){
        return false;
    }

    const options = {
        headers:{
            name: nameHax+'.csv',
            pass: 'BJgJl.lJHkHJvkjhjy'
        },
        url: url,
        formData: formData,
    };

    return await new Promise((resolve, reject) => {
        request.post(options, (err, httpResponse, body) =>{
            if (err) {
                console.log('upload failed:', err);
                reject(false);
            }
            try {
                console.log('Request successful!  Server responded with:', JSON.parse(body));

                resolve(JSON.parse(body))
            }catch (e) {
                console.log(e);
                resolve(false)
            }
        });
    });
}