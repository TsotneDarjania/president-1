import Player from "../characters/player";
import { regionDatas } from "../data/regionDatas";
import Region from "../gameObjects/region";

export default class GameScene extends Phaser.Scene{
    
    //Parametres
    gameSceneWidth : number = 50000;
    camera_z_index : number = 1.0;

    //GameObjects
    road : Phaser.GameObjects.TileSprite;

    //charachters
    player : Phaser.GameObjects.Container;

    

    constructor(){
        super("GameScene")
    }

    create(){

        this.addRegions();

        this.addPlayer();
        this.addRoad();
        this.setCameraSettions();

        this.physics.add.collider(this.player,this.road)

        this.add.image(0,790,"hideLine")
        .setDisplaySize(this.gameSceneWidth,10)
        .setOrigin(0)
        .setDepth(100);
    } 

    addRegions(){
        new Region(this,700,630,regionDatas.nataxtari);
        new Region(this,800,630,regionDatas.nataxtari);
        new Region(this,1400,630,regionDatas.nataxtari);
    }

    setCameraSettions(){
        this.cameras.main.setBounds(0,0,Infinity,900);
        this.cameras.main.startFollow(this.player,false,0.004,0.08);
        this.cameras.main.setZoom(this.camera_z_index);

        this.player.on("move", () => {
            this.camera_z_index = 0.3;

            this.add.tween({
                targets : this.cameras.main,
                zoom : this.camera_z_index,
                y : 630,
                duration: 10000,
                ease: Phaser.Math.Easing.Cubic.InOut
            })
        })
        this.player.on("stop", () => {
            this.camera_z_index = 1.0;

            this.add.tween({
                targets : this.cameras.main,
                zoom : this.camera_z_index,
                y : 0,
                duration: 20000,
                ease: Phaser.Math.Easing.Cubic.InOut
            })
        })
    }
    
    addPlayer(){
        this.player = new Player(this,300,500)
    }

    addRoad(){
        this.road = this.add.tileSprite(0,790,this.gameSceneWidth,210,"road")
        .setScale(0.6)
        .setOrigin(0,0);
        this.physics.add.staticGroup(this.road)
        //@ts-ignore
        this.road.body.y = 790;
    }
}