import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {location: 'sunnyvale', format: 'json', u: 'f'},
    headers: {
      'X-RapidAPI-Key': '8dd658552bmsh9bf45dd766ebaf7p1140dejsn7b9c838d2044',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });


