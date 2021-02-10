import Phaser from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'dude');
        scene.add.existing(this);
		scene.physics.add.existing(this);
        this.setBounce(0.2);
        this.setCollideWorldBounds(true);
	}
	
    update(cursors) {
		if (cursors.left.isDown) {
            this.setVelocityX(-160);
            this.anims.play('left', true);
        } else if (cursors.right.isDown) {
            this.setVelocityX(160);
            this.anims.play('right', true);
        } else {
            this.setVelocityX(0);
            this.anims.play('turn');
        }

        if (cursors.up.isDown && this.body.touching.down) {
            this.setVelocityY(-330);
        }
	}
}

export default Player;
