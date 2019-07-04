# NFLMVC
![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Express-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-MySql-brightgreen.svg) 

![alt text](https://img.shields.io/badge/uses-Handlebars-blue.svg)  ![alt text](https://img.shields.io/badge/uses-Bootstrap-blue.svg) ![alt text](https://img.shields.io/badge/uses-jQuery-blue.svg) 

# The Application
This exercise was designed to give me experience with MVC development and while querying larger sets of data from mySql. The application is a basic mock draft where there is a list of potential candidates in one list, a set of teams in a very specific order in another list. The user selects the player they wish to draft and then click on the Draft Player button. Drafting the player removes then from the available player list and adds them to a drafted list. The team list updates and the draft counties with the next team.

I added a Add a Ringer feature where the user can create a new player for any position with any rating score. I also made it possible to modify the payer rating after they have been created.
# How I built it
MySql provides the storage of data. I generated 250+ random players and ratings. They are stored in a Players table along with the number they were picked, the id of the team that drafted them. Those additional columns are null if the player has not yet been drafted. The teams are in their own table which includes the city of the team, team name, draft position and the name of the graphic for the logo of that team.
The pull from the db allows Handlebars to build out the graphical representation of each player (drafted and undrafted) and the teams. jQuery handles click events for the players and the buttons and also filters out plyers if the end user filters down by  a specific position.
Bootstrap provided a quick structure for the layout but some custom css is applied. This site is not designed for smaller devices although larger tablets will perform as expected. On the update player screen is a button that will reset the database.
If you wanted to replicate this repo on your local system you would need to establish your db for storing data and establish the connection in line 6 – 10 in the connection.js file in the config folder. There is a file to create the tables (NFL Table Creation.xt in the config folder)
``` 
if (process.env.JAWSDB_URL) {
     connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
     connection =  mySQL.createConnection(keys.sqlKeys);
}
```

The routing api allows for sql to save and update user data. Js also controls the draft order, counts the number of picks, anyone drafted get removed from available and placed in the drafted side with the appropriate team logo. The db allows the draft to resume at any time.
