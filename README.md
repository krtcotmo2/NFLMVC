# [NFL MVC](https://nfldraft-krc.herokuapp.com/) 
![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Express-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-MySql-brightgreen.svg) 

![alt text](https://img.shields.io/badge/uses-Handlebars-blue.svg)  ![alt text](https://img.shields.io/badge/uses-Bootstrap-blue.svg) ![alt text](https://img.shields.io/badge/uses-jQuery-blue.svg) 

# The Application
This exercise was designed to give me experience with MVC development while querying larger sets of data from mySql. The application is a basic mock draft where there is a list of potential candidates in one list, a set of teams in a very specific order in another list. The user selects the player they wish to draft and then click on the Draft Player button. Drafting the player removes then from the available player list and adds them to a drafted list. The team list updates and the draft counties with the next team.

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

## Draft Board
[<img align="center" src="https://github.com/krtcotmo2/NFLMVC/blob/master/public/assets/images/draft.png">](https://nfldraft-krc.herokuapp.com/)
#### On Page load

- Connect to sql db and get all teams by draft order
- Connect to sql db and get all players not yet drafted and drafted
- Based on number of players drafted, determine current team on the clock on show that team plus next three
- Show players still eligible for the draft on the left
- Show drafted players on the right

#### On available player click

- Adds tint to the player holder
- Shows that player above the current team on the clock next to a draft button

#### Click draft button
- Updates player in db to be drafted by the current team
- Removes player from available players
- Adds player to drafted players
- Increments the round/pick number
- Moves current team to bottom of the queue and loads the next team to be on the clock.

## Add a Ringer Page
Don't like what you see left on the board. Go to this page to add a custom player and then draft them.

#### On form submit
- Validate a name, position and rating exists
- Add player to the db
- redirect to the draft board

## Update a Player Page (hope to get to this)
So you didn't get the player you wanted because your rival drafted them first, pull a fast one and change the rating of the player

- Page shows list of drafted players
- click on player to load their rating score
- edit the score and click save
- update player in db
- redirects to draft board

## Nice to Haves
- filter by position in the draft board
- sort by ratings

