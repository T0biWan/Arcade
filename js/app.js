/**
 * Created by Tobi on 28.01.2017.
 */
var game = new Phaser.Game(800, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update });
var player;
var wKey;

function preload() {
    game.load.image('player', 'media/images/player.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = game.add.sprite(game.width/2, game.height/4, 'player');
    player.height = 80;
    player.width = 40;
    player.anchor.set(0.5, 0.5);
    game.physics.arcade.enable(player);
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
    //wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    //cursors.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
}

function update() {
    player.body.velocity.x = 0;
    if (cursors.left.isDown) player.body.velocity.x = -150;
    else if (cursors.right.isDown) player.body.velocity.x = 150;
    if (cursors.up.isDown) player.body.velocity.y = -150;
}