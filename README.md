# Pixel-Maze
Pacman-like game.

The game works as an array of numbers, which are then loaded into the HTML by document selecting the grid class. the numbers 1, 2, 3, 4 and translated into different classes, which are then styled in the CSS to create both the level and the enemy layout. Using Keycode, I am able to tie different keys to the movement of the hero, allowing motion by simply moving the hero. Then by using switch cases and minimal if statements, cases for each different object it may run into in the area results in different movement options or different functions being called. Such as not being able to move in the array direction if a wall class is present. This same method is used for my monsters the play may encounter, however, their movement is determined by a Math.random and a Math.floor.

Test the game here: https://pixelmaze.herokuapp.com/
