import { regionData } from "../data/regionDatas";

export default class Region extends Phaser.GameObjects.Container{

    regionData : regionData;
    icon : Phaser.GameObjects.Image;

    constructor(scene : Phaser.Scene, x : number, y : number, regionData : regionData){
        super(scene,x,y)
        this.scene.add.existing(this)

        this.regionData = regionData;

        this.init();
    }

    init(){
        this.createIcon();
    }

    createIcon(){
        this.icon = this.scene.add.image(0,130,this.regionData.iconKey)
        .setOrigin(0.5)
        .setScale(0.6);
        this.add(this.icon);
    }


}