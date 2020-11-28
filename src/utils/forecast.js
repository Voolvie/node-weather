const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const urlWeather = 'http://api.weatherstack.com/current?access_key=47b300da1fb40700271e95657748453a&query=' + longitude + ',' + latitude + '&units=m'
    request({url: urlWeather, json: true}, (error, {body})=>{
       if(error){
          callback('Unable to connect to weather services', undefined)
       }else if(body.error){
          callback('Wrong coordinates', undefined)
       }else{
          callback(body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '. It feels like its ' + body.current.feelslike)
       }

    })
 }
 module.exports = forecast