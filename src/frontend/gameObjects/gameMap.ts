import { regionDatas } from "../data/regionDatas"
import GameScene from "../scenes/gameScene";
import MapTileObject from "./mapTileObject";
import Region from "./region"

export default class GameMap extends Phaser.GameObjects.Container{

    forest : MapTileObject;
    gamescene : GameScene;

    constructor(scene : Phaser.Scene, x : number, y : number){
        super(scene,x,y)
        this.scene.add.existing(this)
        this.gamescene = this.scene as GameScene;

        this.addAllRegions();
        this.addForest();
    }

    addForest(){
        this.forest = new  MapTileObject(
            this.scene,
            44000,
            370,
            this.gamescene.cameraMaxWidthView,
            420, 
            "forest-tile-sprite-1"
        )
        .setDepth(-5)
        .setTint(0x2DCCA8);

        this.add(this.forest)
    }

    addAllRegions(){
        Object.keys(regionDatas).forEach( (index) => {
            this.add(new Region(
                this.scene,
                regionDatas[index].positions.x,
                regionDatas[index].positions.y,
                regionDatas[index],
            ))
        })
    }
}