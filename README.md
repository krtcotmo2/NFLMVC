# NFLMVC
![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Express-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-MySql-brightgreen.svg) 

![alt text](https://img.shields.io/badge/uses-Handlebars-blue.svg)  ![alt text](https://img.shields.io/badge/uses-Bootstrap-blue.svg) ![alt text](https://img.shields.io/badge/uses-jQuery-blue.svg) 

Mocks the NFL draft board. 255 payers across 12 positions. All were randomly generated and placed in a db. There are 32 teams in a specific order that determines the draft order.


The Public folder holds the logos, css and script files. Bootstrap powers the layouts. Handlebars uses a repeating element for the list of all the players that are drafted and all available players.


The Add a Ringer form allows the user to create a player and give them a rating. The Update a Player form allows the user to modify the rating of the player. The edit player screen also has a button that will reset the entire draft process. 


The routing api allows for sql to save and update user data. Js also controls the draft order, counts the number of picks, anyone drafted get removed from available and placed in the drafted side with the appropriate team logo. The db allows the draft to resume at any time.

