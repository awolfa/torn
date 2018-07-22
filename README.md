# torn.js
Javascript API Library for the Torn City API using Promises.
API Documentation can be found at api.torn.com

### Getting started
To use import the script and create a Torn object as follows

```javascript
const torn = new Torn({ API_Key: key });
```

where key is your API Key, which can be found at https://www.torn.com/preferences.php under the API Key tab

### How to use
The library contains 6 sections, matching the API

example: 
```javascript
torn.user.networth(id).then((result) => {
    // DO SOMETHING HERE
  }, (err) => {
    // HANDLE ERROR HERE
});
```

where .user is the endpoint category, .networth is the selection and id is an optional parameter.
#### Available Categories

.user

.property

.faction

.company

.market

.torn

#### Available Selections
For a full list of available selections visit api.torn.com

