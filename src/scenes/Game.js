import Phaser from 'phaser';
import playerAnims from '../anims/PlayerAnims';
import PlatformGroup from '../objects/PlatformGroup';
import Player from '../objects/Player';
import StarGroup from '../objects/StarGroup';

class Game extends Phaser.Scene {
	constructor() {
		super('game');
	}

	preload() {
        // Part 7
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	create() {
        this.score = 10;
        this.gameOver = false;
		// Part 3
        this.add.image(400, 300, 'sky');

        // Part 4
        this.platforms = new PlatformGroup(this.physics.world, this);
    
        // Part 5
        playerAnims(this.anims);
        this.player = new Player(this, 100, 450);
    
        // Part 6
        this.physics.add.collider(this.player, this.platforms);
    
        // Part 8
        this.stars = new StarGroup(this.physics.world, this);

        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    
        // Part 9
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
        // Part 10
        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
	}

    // Part 8 
    collectStar (player, star) {
        star.disableBody(true, true);

        // Part 9
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        // Part 10
        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var bomb = this.bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
    }

    // Part 10
    hitBomb (player, bomb) {
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.gameOver = true;
    }

	update() {
		// Part 7
        if (this.gameOver) {
            this.physics.pause();
        } else {
            this.player.update(this.cursors);
        }
    }
}

export default Game;
