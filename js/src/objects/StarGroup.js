import Phaser from 'phaser';

class StarGroup extends Phaser.Physics.Arcade.Group {
    constructor (world, scene) {
        super(world, scene);

        for (var x = 12; x <= 70 * 11 + 12; x = x + 70) {
            var star = this.create(x, 0, 'star');
            star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        }
    }
}

export default StarGroup;