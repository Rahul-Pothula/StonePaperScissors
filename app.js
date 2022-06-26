const express = require('express')
const app = express()

//stone, paper, scissors
const weapons = ["stone", "paper", "scissors"]

//for storing the json data of 50 iterations
let jsonData = []

//using get method at /game/start as specified in the problem statement
//so we will get the response at "localhost:3000/game/start"
app.get("/game/start", (req, res) => {
    let randWeapon1, randWeapon2, randWeapon3, randWeapon4
    for (let i = 0; i < 50; i++) {
        //using random function for the selection of weapons
        randWeapon1 = Math.floor(Math.random() * 3)
        randWeapon2 = Math.floor(Math.random() * 3)
        randWeapon3 = Math.floor(Math.random() * 3)
        randWeapon4 = Math.floor(Math.random() * 3)

        //finding all the 16 possible outcomes
        let score11 = "-",
          score12 =
            randWeapon1 - randWeapon2 === -2 || randWeapon1 - randWeapon2 === 1,
          score13 =
            randWeapon1 - randWeapon3 === -2 || randWeapon1 - randWeapon3 === 1,
          score14 =
            randWeapon1 - randWeapon4 === -2 || randWeapon1 - randWeapon4 === 1;
        let score21 =
            randWeapon2 - randWeapon1 === -2 || randWeapon2 - randWeapon1 === 1,
          score22 = "-",
          score23 =
            randWeapon2 - randWeapon3 === -2 || randWeapon2 - randWeapon3 === 1,
          score24 =
            randWeapon2 - randWeapon4 === -2 || randWeapon2 - randWeapon4 === 1;
        let score31 =
            randWeapon3 - randWeapon1 === -2 || randWeapon3 - randWeapon1 === 1,
          score32 =
            randWeapon3 - randWeapon2 === -2 || randWeapon3 - randWeapon2 === 1,
          score33 = "-",
          score34 =
            randWeapon3 - randWeapon4 === -2 || randWeapon3 - randWeapon4 === 1;
        let score41 =
            randWeapon4 - randWeapon1 === -2 || randWeapon4 - randWeapon1 === 1,
          score42 =
            randWeapon4 - randWeapon2 === -2 || randWeapon4 - randWeapon2 === 1,
          score43 =
            randWeapon4 - randWeapon3 === -2 || randWeapon4 - randWeapon3 === 1,
          score44 = "-";

        //JSON data
        let iterationResult = {
            iteration: i + 1,
          player1Weapon: weapons[randWeapon1],
          player2Weapon: weapons[randWeapon2],
          player3Weapon: weapons[randWeapon3],
          player4Weapon: weapons[randWeapon4],
          player1: {
            againstPlayer1: score11,
            againstPlayer2: score12 ? 1 : 0,
            againstPlayer3: score13 ? 1 : 0,
            againstPlayer4: score14 ? 1 : 0
          },
          player2: {
            againstPlayer1: score21 ? 1 : 0,
            againstPlayer2: score22,
            againstPlayer3: score23 ? 1 : 0,
            againstPlayer4: score24 ? 1 : 0
          },
          player3: {
            againstPlayer1: score31 ? 1 : 0,
            againstPlayer2: score32 ? 1 : 0,
            againstPlayer3: score33,
            againstPlayer4: score34 ? 1 : 0
          },
          player4: {
            againstPlayer1: score41 ? 1 : 0,
            againstPlayer2: score42 ? 1 : 0,
            againstPlayer3: score43 ? 1 : 0,
            againstPlayer4: score44
          }
        };

        jsonData.push(iterationResult)
    }
    //returning with the data of JSON response as specified in the problem statement
    res.json(jsonData)
})

//using port 3000 for connecting the server
app.listen(3000, () => console.log('server running at port 3000'))