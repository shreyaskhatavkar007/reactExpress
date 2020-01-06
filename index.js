const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = {
        selectedGame: {},
        allGames: [
          {"gameName": "Game1", "mid": "1010", cid: "5010"},
          {"gameName": "Game1Desktop", "mid": "1010", cid: "5010"},
          {"gameName": "Game2", "mid": "1012", cid: "5012"},
          {"gameName": "Game3", "mid": "1013", cid: "5013"},
          {"gameName": "Game4", "mid": "1014", cid: "5014"},
          {"gameName": "Game5", "mid": "1015", cid: "5015"},
          {"gameName": "Game6", "mid": "1016", cid: "5016"},
          {"gameName": "Game7", "mid": "1017", cid: "5017"},
          {"gameName": "Game8", "mid": "1018", cid: "5018"},
          {"gameName": "Game9", "mid": "1019", cid: "5019"},
          {"gameName": "Game10", "mid": "1011", cid: "5011"}
        ],
        searchedGames: ['undefined']
    };
    res.json(list);
    console.log('Sent Games');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);