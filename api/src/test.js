const request = require('request');

try {
    request.get(encodeURI('http://localhost:5000/get?num=АР0517АА'), (error, response, body)=>{
        console.log('statusCode:', response && response.statusCode)
    });
    request.get(encodeURI('http://localhost:5000/get?num=АС4142ВЕ'), (error, response, body)=>{
        console.log('statusCode:', response && response.statusCode)
    });
    request.get(encodeURI('http://localhost:5000/get?num=АС3826ХТ'), (error, response, body)=>{
        console.log('statusCode:', response && response.statusCode)
    });
    request.get(encodeURI('http://localhost:5000/get?num=АС0397ХТ'), (error, response, body)=>{
        console.log('statusCode:', response && response.statusCode)
    });
    request.get(encodeURI('http://localhost:5000/get?num=08ВА8008'), (error, response, body)=>{
        // console.log(error);
        console.log('statusCode:', response && response.statusCode)
    });
}catch (e) {
    console.log(e);
}
