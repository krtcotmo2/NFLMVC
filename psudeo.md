# Draft Board
### On Page load

- Connect to sql db and get all teams by draft order
- Connect tl sql db and get all players not yet drafted and drafted
- Based on number of players drafted, determine current team on the clock on show that team plus next three
- Show players still eligible for the draft on the left
- Show drafted players on the right

### On available player click

- Adds tint to the player holder
- Shows that player above the current team on the clock next to a draft button

### Click draft button
- Updates player in db to be drafted by the current team
- Removes player from available players
- Adds player to drafted players
- Increments the round/pick number
- Moves current team to bottom of the queue and loads the next team to be on the clock.

#Add a Ringer Page
Don't like what you see left on the board. Go to this page to add a custom player and then draft them.

### On form submit
- Validate a name, position and rating exists
- Add player to the db
- redirect to the draft board

# Update a Player Page (hope to get to this)
So you didnt get the palyer you wnated bcause your rival drafted them first, pull a fast one and change the rating of the player

- Page shows list of drafted players
- click on player to load their rating score
- edit the score and clcik save
- update player in db
- redirects to draft board

# Nice to Haves
- filter by position in teh draft board
- sort by ratings
