import Player from "../characters/player";
import { GameConfig } from "../data/gameConfig";
import GameMap from "../gameObjects/gameMap";


export default class GameScene extends Phaser.Scene{
    
    //Parametres
    gameSceneWidth : number = 120000;
    camera_z_index : number = 1.0;
    readonly cameraMaxWidthView : number = 5000;
    readonly cameraMinWidthView : number = 1500;
    

    //GameObjects
    road : Phaser.GameObjects.TileSprite;
    gameMap : GameMap;

    //charachters
    player : Phaser.GameObjects.Container; 

    
    constructor(){
        super("GameScene")
    }

    create(){
        this.addPlayer();
        this.addGameMap();
        this.addRoad();
        this.setCameraSettions();

        this.physics.add.collider(this.player,this.road)
    } 

    addGameMap(){
        this.gameMap = new GameMap(this,0,0)
    }

    setCameraSettions(){
        this.cameras.main.setBounds(0,0,Infinity,900);
        this.cameras.main.startFollow(this.player,false,0.004,0.08);
        this.cameras.main.setZoom(this.camera_z_index);
        this.addCameraZoomEfects();
    }

    addCameraZoomEfects(){
        this.player.on("move", () => {
            this.tweens.killTweensOf(this.cameras.main);
            this.camera_z_index = 0.3;

            this.add.tween({
                targets : this.cameras.main,
                zoom : this.camera_z_index,
                y : 630,
                duration: 10000,
                repeat : 0,
                ease: Phaser.Math.Easing.Cubic.Out,
            })
        })
        this.player.on("stop", () => {
            this.tweens.killTweensOf(this.cameras.main);
            this.camera_z_index = 1.0;

            this.add.tween({
                targets : this.cameras.main,
                zoom : this.camera_z_index,
                y : 0,
                duration: 5000,
                repeat : 0,
                ease: Phaser.Math.Easing.Cubic.InOut,       
            })
        })
    }
    
    addPlayer(){
        this.player = new Player(this,GameConfig.player.positions.startPosition_X,GameConfig.player.positions.startPosition_Y);
        this.player.setDepth(10)
    }

    addRoad(){
        this.road = this.add.tileSprite(0,790,this.gameSceneWidth,210,"road")
        .setScale(0.6)
        .setOrigin(0,0);
        this.physics.add.staticGroup(this.road)

        this.add.image(0,790,"hideLine")
        .setDisplaySize(this.gameSceneWidth,10)
        .setOrigin(0)
        .setDepth(100);

        //@ts-ignore
        this.road.body.y = 790;
    }
}