'use strict';

// Torn.js
function Torn(config) {

  const xhr = new XMLHttpRequest();
  const API_Key = config.API_Key;
  const baseURL = 'https://api.torn.com';

  this.user = {};

  this.user.properties = function () {

    let url = baseURL + '/user/' + '?selections=properties' + '&key=' + API_Key;
    return new Promise(function (resolve, reject) {

      xhr.open("GET", url, true);

      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (checkError(response) === true) {
              reject(response.error.error);
            } else {
              // TODO: Move to seperatefunction, keep first iteration identical to api
              const p = response.properties;
              const properties = [];
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  properties.push({
                    property_id: key,
                    owner_id: p[key].owner_id,
                    property_type: p[key].property_type
                  });
                }
              }
              resolve(properties);
            };

          } else {
            reject(Error(xhr.statusText));
          }
        }
      };

      xhr.onerror = function (e) {
        reject(Error(xhr.statusText));
      };

      xhr.send(null);

    });

  }

  function checkError(response) {
    if (response.error !== undefined) {
      switch (response.error.code) {
        case 0:
          alert('Unknown error');
          break;
        case 1:
          alert('Key is empty');
          break;
        case 2:
          alert('Incorrect Key');
          break;
        case 3:
          alert('Wrong type');
          break;
        case 4:
          alert('Wrong fields');
          break;
        case 5:
          alert('Too many requests');
          break;
        case 6:
          alert('Incorrect ID');
          break;
        case 7:
          alert('Incorrect ID-entity relation');
          break;
        case 8:
          alert('IP block');
          break;
        case 9:
          alert('API disabled');
          break;
        case 10:
          alert('Key owner is in federal jail');
          break;
        case 11:
          alert('Key change error');
          break;
        case 12:
          alert('Key read error');
          break;
        default:
          alert('Unknown Error ID');
          break;
      }
      return true;
    } else {
      return false;
    }
  }
}
