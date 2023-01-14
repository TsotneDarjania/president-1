import { regionData } from "../data/regionDatas";

export default class Region extends Phaser.GameObjects.Container{

    regionData : regionData;
    icon : Phaser.GameObjects.Image;
    flag : Phaser.GameObjects.Image;
    title : Phaser.GameObjects.Text;

    constructor(scene : Phaser.Scene, x : number, y : number, regionData : regionData){
        super(scene,x,y)
        this.regionData = regionData;
        this.init();
    }

    init(){
        this.createIcon();
        this.createFlag();
        this.createTitle();
        this.setScale(this.regionData.scale)
    }

    createIcon(){
        this.icon = this.scene.add.image(0,115,this.regionData.iconKey)
        .setOrigin(0.5)
        .setScale(0.6);
        this.add(this.icon);
    }

    createFlag(){
        this.flag = this.scene.add.image(0,(this.icon.y-this.icon.height/2) + 30,this.regionData.flagKey)
        .setOrigin(0.5)
        .setScale(0.6);
        if(this.regionData.iconKey === "bigCity") {
            this.flag.setPosition( (this.icon.width/2 - this.flag.width/2) - 170 ,(this.icon.y-this.icon.height/2) + 70)
        } else {
            this.flag.setPosition( (this.icon.width/2 - this.flag.width/2) - 10 ,(this.icon.y-this.icon.height/2) + 10)
        }
        
        this.add(this.flag);
        
        this.moveDown(this.flag)
        this.moveDown(this.flag)
    }

    createTitle(){
        this.title = this.scene.add.text(0,0,this.regionData.name, {
            align : "center",
            fontSize : "30px",
            color : "#100930",
            stroke : "#100930",
            strokeThickness : 2  
        }).setOrigin(0)
        this.title.setPosition((this.icon.width/2 - this.title.width/2) - 70, (-this.icon.height) + 60)
        this.title.setShadow(0, 0, '#100930', 20)
        
        this.add(this.title)
    }
}