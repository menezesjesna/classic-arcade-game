// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.height = 101;
    this.width = 71;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if (this.x > 500) {
        this.x = Math.floor((Math.random() * 0) - 500);
        this.y = Math.floor((Math.random() * 200) + 100);
    } else {
        this.x = this.x + (Math.floor((Math.random() * 500) + 50) * dt);
    }
    
    this.checkCollision();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.height = 101;
    this.width = 71;
};

//reset function resets the position of the player to initial position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//updates the position of the player
Player.prototype.update = function(dt) {
    this.x * dt;
    this.y * dt;
    };


//Detects the collision between the enemy bugs and the palyer
Enemy.prototype.checkCollision = function() {

    if ((player.y > this.y - 50 && player.y < this.y + 50) && (player.x > this.x && player.x < this.x + 50)) {
        player.reset();
        //If there is any collision between the enemy and the player,player position is returned to the initial position
    }
};

//Prevents the player from going offscreen
Player.prototype.handleInput = function(direction) {
    if(direction === 'left'){
 this.x -= 100;
 if(this.x < 0) {
    this.x += 500;
 }
 }
 if(direction === 'up'){
 this.y -= 82.5;
 if(this.y <= -12.5) {
    this.y = -12.5;
    alert("You win!!!");//Alert message displayed to show the end of the game
    this.reset();
 }
 }
 if(direction === 'right'){
 this.x += 100;
 if(this.x >= 500) {
    this.x = 0;
 }
 }
 if(direction === 'down'){
 this.y += 82.5;
 if(this.y > 400) {
    this.y = 400;
 }
 }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0, 50);
var enemy2 = new Enemy(0, 150);
var enemy3 = new Enemy(0, 240);
var enemy4 = new Enemy(0, 220);
var enemy5 = new Enemy(0, 25);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

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
