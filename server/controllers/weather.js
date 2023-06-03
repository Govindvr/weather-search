const express = require('express');
const axios = require('axios');

const getWeather = async (req, res) => {
    
    const rawData = {
        "locations": []
      };
    
    const params = req.body;
    params.cities.forEach(item => {
        rawData.locations.push({
            "q": `${item}`,
      })
    });

    const output = {
        "weather" : {}
    };

    axios.get('http://api.weatherapi.com/v1/current.json?q=bulk&key=fd0487f6ecec45f9b6a175343230206',{data : rawData})
    .then(response => {
        // Process the response data
        console.log(response.data.bulk);
        response.data.bulk.forEach(item => {
            output.weather[item.query.location.name] = `${item.query.current.temp_c}C`;
            
        })
        res.send(output);

    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
    
}

module.exports = {getWeather}