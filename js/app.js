/**
 * Created by Tobi on 28.01.2017.
 */
var game = new Phaser.Game(800, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update });
var player;

function preload() {
    game.load.image('player', 'media/images/player.png');
}

function create() {
    player = game.add.sprite(0, 0, 'player');
    player.height = 80;
    player.width = 40;
}

function update() {}