import * as request from "request";

export default async ()=>{

    // After all the files are uploaded, a function is launched that sends a signal to the server to start adding data to the database
    const url:string = 'http://185.209.28.127:5000/uploads/start';
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
                console.log('Start successful!  Server responded with:', body);
                resolve(JSON.parse(body).result)
            }catch (e) {
                reject(false)
            }
        });
    });
}