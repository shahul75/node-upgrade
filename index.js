# const moment = require('moment');

const greeting = {
    "en" : "Hello",
    "fr" : "Bonjour",
    "ar" : "Salam",
    "es" : "Hola",
    "ta" : "Vanakkam"
 };

 exports.handler = async (event) =>{

    let name = event.pathParameters.name;
    let {lang, ...info}   = event.queryStringParameters;    
    let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;
    let responsemessage = {
        message: message,
        info: info,
     #   timestamp : moment().unix()
    }
    
        const response = {
        "statusCode": 200,
         body :  JSON.stringify(responsemessage),
        "isBase64Encoded": false
    };
    
    return response;
 };
