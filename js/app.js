var enemySpeed = [50, 90, 150, 220, 230];
var columns = [0, 101, 202, 303, 404, 505, 606, 707, 808];
var rows = [81, 162, 243];
var gemImages =['images/gem-blue.png', 'images/gem-green', 'images/gem-orange'];

//Choose a random number from the array
var num = function(array){
    return array[Math.floor(Math.random()*array.length)];
};



// Enemies our player must avoid
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = num(rows);
    this.width = 70;
    this.height = 80;
    this.speed = num(enemySpeed);
    this.reset();
};

Enemy.prototype.reset = function(){
    this.x= -100;
    this.y += 80;
    this.speed = num(enemySpeed);

    if(this.y > 249){
        this.y = num(rows);
    }
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed *dt;
    if(this.x > 920){
        this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 400;
    this.y = 400;
    this.width = 50;
    this.height = 50;
    this.lives = 5;  // Keep track of player lives

};
// This class requires an update(),
Player.prototype.update = function(dt) {
    this.x*dt;
    this.y*dt;
    this.checkCollide();
};

Player.prototype.checkCollide = function(){
    //If player goes into water it loses a life

    if(this.y <= 0){
        //numLife.loseLife();
        this.reset();
    }

    else if(this.y >=82 && this.y <=249){
        allEnemies.forEach(function(enemy){
                if((player.x - enemy.x < 50 && player.y - enemy.y < 50) && (player.x - enemy.x > -50 && player.y - enemy.y > -50)){
                    player.reset();
                }

        });
    }
};
//render()

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Crate a Life Class
var Life = function(){
    this.lifeImg ='images/Heart.png';
    this.number = 6;
};


//Create a Gem Class

var Gem = function(){

};
//reset

Player.prototype.reset = function(){
    this.x = 400;
    this.y = 400;
};
// a handleInput() method.

Player.prototype.handleInput = function (key) {
    if(key === 'left' && this.x >0){
        this.x -= 101;
    }
    else if(key === 'right' && this.x <800){
        this.x += 101;
    }

    else if(key === 'up' && this.y >0){
        this.y -= 83;
    }

    else if(key === 'down' && this.y<400){
        this.y +=83;
    }
  };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// Create variable for player, number of lives and gems
var player = new Player();
var numLife = new Life();
var gem = new Gem();
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
