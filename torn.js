'use strict';

// Torn.js
function Torn(config) {

  const xhr = new XMLHttpRequest();
  const API_Key = config.API_Key;
  const baseURL = 'https://api.torn.com';

  this.user = {};

  this.user.networth = (id) => {
    return makeRequest(id, 'user', ['networth']);
  }

  this.user.bazaar = (id) => {
    return makeRequest(id, 'user', ['bazaar']);
  }

  this.user.display = (id) => {
    return makeRequest(id, 'user', ['display']);
  }

  this.user.inventory = (id) => {
    return makeRequest(id, 'user', ['inventory']);
  }

  this.user.hof = (id) => {
    return makeRequest(id, 'user', ['hof']);
  }

  this.user.travel = (id) => {
    return makeRequest(id, 'user', ['travel']);
  }

  this.user.events = (id) => {
    return makeRequest(id, 'user', ['events']);
  }

  this.user.messages = (id) => {
    return makeRequest(id, 'user', ['messages']);
  }

  this.user.education = (id) => {
    return makeRequest(id, 'user', ['education']);
  }

  this.user.medals = (id) => {
    return makeRequest(id, 'user', ['medals']);
  }

  this.user.honors = (id) => {
    return makeRequest(id, 'user', ['honors']);
  }

  this.user.notifications = (id) => {
    return makeRequest(id, 'user', ['notifications']);
  }

  this.user.personalstats = (id) => {
    return makeRequest(id, 'user', ['personalstats']);
  }

  this.user.workstats = (id) => {
    return makeRequest(id, 'user', ['workstats']);
  }

  this.user.crimes = (id) => {
    return makeRequest(id, 'user', ['crimes']);
  }

  this.user.icons = (id) => {
    return makeRequest(id, 'user', ['icons']);
  }

  this.user.cooldowns = (id) => {
    return makeRequest(id, 'user', ['cooldowns']);
  }

  this.user.money = (id) => {
    return makeRequest(id, 'user', ['money']);
  }

  this.user.perks = (id) => {
    return makeRequest(id, 'user', ['perks']);
  }

  this.user.battlestats = (id) => {
    return makeRequest(id, 'user', ['battlestats']);
  }

  this.user.bars = (id) => {
    return makeRequest(id, 'user', ['bars']);
  }

  this.user.profile = (id) => {
    return makeRequest(id, 'user', ['profile']);
  }

  this.user.basic = (id) => {
    return makeRequest(id, 'user', ['basic']);
  }

  this.user.attacks = (id) => {
    return makeRequest(id, 'user', ['attacks']);
  }

  this.user.attacksfull = (id) => {
    return makeRequest(id, 'user', ['attacksfull']);
  }

  this.user.stocks = (id) => {
    return makeRequest(id, 'user', ['stocks']);
  }

  this.user.properties = (id) => {
    return makeRequest(id, 'user', ['properties']);
  }

  this.user.jobpoints = (id) => {
    return makeRequest(id, 'user', ['jobpoints']);
  }

  this.user.merits = (id) => {
    return makeRequest(id, 'user', ['merits']);
  }

  this.user.refills = (id) => {
    return makeRequest(id, 'user', ['refills']);
  }

  ///////////////////////////////
  //  Utilities
  ///////////////////////////////

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

  function getRequest(url) {
    return new Promise(function (resolve, reject) {

      xhr.open("GET", url, true);

      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (checkError(response) === true) {
              reject(response.error);
            } else {
              resolve(response);
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

  function propertiesToArray(response) {
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
    return properties;
  }

  function makeRequest(id, type, selections) {

    // add first item to selection
    let selectionString = selections[0];

    // remove first item
    selections.splice(0, 1);

    // add remaining items
    if (selections.length > 0) {
      selections.forEach(selection => {
        selectionString += (',' + selection);
      });
    }

    // url
    let url =  baseURL + '/' + type + '/';
    if (id === undefined) {
      // hi friend ♥
    } else {
      url += id;
    }
    url += '?selections=' + selectionString + '&key=' + API_Key;

    return getRequest(url);
  }
}


