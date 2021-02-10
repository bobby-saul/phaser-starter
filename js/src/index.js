import Phaser from "phaser";
import Preload from "./scenes/Preload";
import Game from "./scenes/Game";

// Step 1
var config = {
    type: Phaser.CANVAS,
    // type: Phaser.AUTO, // CANVAS works smoother on my old mac
    width: 800,
    height: 600,
    // Part 4
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Preload, Game]
};

var game = new Phaser.Game(config);
