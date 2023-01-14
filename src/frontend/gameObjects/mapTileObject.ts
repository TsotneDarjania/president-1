import GameScene from "../scenes/gameScene";

export default class MapTileObject extends Phaser.GameObjects.TileSprite{

    to : number;
    gamescene : GameScene;
    offset : number;


    constructor( 
        scene: Phaser.Scene,
        x : number, 
        y : number, 
        width : number,
        height : number, 
        textureKey :string,
    ) {
        super(scene,x,y,width,height,textureKey);
        this.gamescene = scene as GameScene;
        this.init();
    }

    init(){
        if(this.width < this.gamescene.cameraMaxWidthView) return (
            console.error("tile gameobject minimum width should be : " + this.gamescene.cameraMaxWidthView)
        );

        this.scene.add.existing(this)
        this.setOrigin(0)

        this.offset = this.tilePositionX - (this.gamescene.cameras.main.scrollX);

    }

    preUpdate(){
        this.checkCameraView();
    }

    //We track camera view to know when to enable tile scrolling
    checkCameraView(){
        let cameraRightBorder = this.gamescene.cameras.main.worldView.right;
        let tileRightBorder = this.x +  this.width;

        if (cameraRightBorder < tileRightBorder) this.offset = this.tilePositionX - (this.gamescene.cameras.main.scrollX)
        if (cameraRightBorder > tileRightBorder) this.tileScroll(this.offset);
    }

    tileScroll(offset : number){
        this.setScrollFactor(0,1);
      
        this.tilePositionX = offset;

        this.setPosition(-(this.gamescene.cameraMaxWidthView - this.gamescene.cameraMinWidthView) / 2, this.y)  
        this.tilePositionX = this.gamescene.cameras.main.scrollX + offset;
    }
}