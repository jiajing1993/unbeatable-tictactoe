## Unbeatable Tic Tac Toe
- without using minmax. 

if the boardLayout is [1,2,3,4,5,6,7,8,9], we can know that the possible win method have only 8 ways.
`[1,2,3],  [4,5,6],  [7,8,9],  [1,4,7],  [2,5,8],  [3,6,9],  [1,5,9],  [3,5,7]`

So, the movement of bot actually dont have to know to win or to lose. it just need to take the way that most likely to be happened from this 8 ways.

Every round, both movement of bot and human will be recorded to calculate the possible move for bot. 

Example, 
if human took the places of [1,4]
and the bot took the place of [5]
so the possible move will left [2,3,6,7,8,9].

The bot will choose 7. because [1,4,7] will be more likely to be happenned. 

Example 2, 
human took the places of [6,9,5]
and the bot took the place of [3,1]
so the possible move will left [2,4,7,8]

Make a guess, which possible win way are more likely to occured.
