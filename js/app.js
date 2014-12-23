var enemySpeed = [50, 90, 150, 220, 230];
var columns = [0, 101, 202, 303, 404, 505, 606];
var rows = [80, 160, 240];
var gemImages =['images/gem-blue.png', 'images/gem-green', 'images/gem-orange'];

//Choose a random number from the array
var num = function(array){
    return array[Math.floor(Math.random()*array.length)];
}



// Enemies our player must avoid
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = num(rows);
    this.width = 70;
    this.height = 83;
    this.speed = num(enemySpeed);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.width = 50;
    this.height = 50;
    this.lives = 5;  // Keep track of player lives

};
// This class requires an update(),
Player.prototype.update = function(dt) {
    this.x*dt;
    this.y*dt;
}
//render()

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// a handleInput() method.

Player.prototype.handleInput = function () {
  }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
