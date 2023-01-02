

export default class PreloadScene extends Phaser.Scene{
    constructor(){
        super("PreloadScene")
    }

    preload(){
        this.load.image("road","assets/road.png")

        //load player
        this.load.atlas('player', 'assets/player/player.png', 'assets/player/player.json');

        this.load.image("smallVillage","assets/smallVillage.png");

        this.load.image("test","assets/player/test.png");
        this.load.image("hideLine","assets/hide-line.png");
    }

    create(){
        this.scene.start("GameScene")
    }
}