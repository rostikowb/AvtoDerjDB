import * as request from "request";

export default async ()=>{

    // Sending a request for the status of adding sent files to the database.
    const url:string = 'http://185.209.28.127:5000/uploads/status';
    const options = {
        headers:{
            pass: 'BJgJl.lJHkHJvkjhjy'
        },
        url: url,
    };

    return await new Promise((resolve, reject) => {
        request.post(options, (err, httpResponse, body)=>{
            if (err) {
                console.error('start:', err);
                reject(false);
            }
            try {
                console.log('Server responded with:', body);
                resolve(JSON.parse(body))
            }catch (e) {
                reject(false)
            }
        });
    });
}