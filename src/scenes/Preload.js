import Phaser from 'phaser';

import sky from '../assets/sky.png';
import ground from '../assets/platform.png';
import star from '../assets/star.png';
import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';

class Preload extends Phaser.Scene {
	constructor() {
		super('preload');
	}

	preload() {
		this.load.image('sky', sky);
        this.load.image('ground', ground);
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
	}

	create() {
		this.scene.start('game');
	}
}

export default Preload;