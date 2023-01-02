import AnimationsController from "../helper/animationsController";
import {AnimationData} from "../data/playerAnimationDatas";


export default class Player extends Phaser.GameObjects.Container{

    head : Phaser.GameObjects.Image;
    playerBody : Phaser.GameObjects.Image;
    leftHand : Phaser.GameObjects.Image;
    rightHand : Phaser.GameObjects.Image;
    leftLeg : Phaser.GameObjects.Image;
    rightLeg : Phaser.GameObjects.Image;
    keyUp : boolean;

    velocity : number = 170;

    animationController : AnimationsController;
    animationTartgets : Array<Phaser.GameObjects.Image>

    constructor(scene : Phaser.Scene,x : number, y : number){
        super(scene,x,y);
        this.scene.add.existing(this)

        this.init();

        this.createBodyParts();
        this.createAnimations();
        this.addController();
    }

    init(){
        this.scene.physics.add.existing(this)
        this.body.gameObject.body.height =  134;
        //@ts-ignore
        this.body.offset.y = -124;
        //@ts-ignore
        this.body.offset.x = -30;

    }

    addController(){
        let cursor = this.scene.input.keyboard.createCursorKeys();

        cursor.left.on(Phaser.Input.Keyboard.Events.DOWN,this.toLeft,this)
        cursor.right.on(Phaser.Input.Keyboard.Events.DOWN,this.toRight,this)
        cursor.left.on(Phaser.Input.Keyboard.Events.UP,this.up,this)
        cursor.right.on(Phaser.Input.Keyboard.Events.UP,this.up,this)
    }

    toLeft(){
        this.scaleX = -1;
        this.keyUp =false;
        this.animationController.changeAnimationMode("walk");
        this.move(-90000);
    }

    toRight(){
        this.scaleX = 1;
        this.keyUp = false;
        this.animationController.changeAnimationMode("walk");
        this.move(90000);
    }

    move(direction : number){
        this.emit("move");
        this.scene.tweens.killTweensOf(this);

        this.scene.tweens.add({
            targets : this,
            x : this.x + (direction),
            duration : 36000,
            useFrames : true,
            ease : "Power2",
            onUpdate : (time) => {
                if(time.progress > 0.1){
                    if(this.keyUp) return;
                    this.move(direction);
                }
            }
        }) 
    }

    up(){
        this.emit("stop");

        this.keyUp = true;
        this.animationController.changeAnimationMode("idle");
        this.scene.tweens.killTweensOf(this);
        this.body.velocity.x = 0;
    }

    createAnimations(){
        this.animationTartgets = [
            this.head,
            this.playerBody,
            this.leftHand,
            this.rightHand,
            this.leftLeg,
            this.rightLeg
        ]
        this.animationController = new AnimationsController(this.scene,"idle",AnimationData,this.animationTartgets)
    }

    createBodyParts(){
        this.createRightHand();
        this.createRightLeg();
        this.createLeftLeg();
        this.createBody();
        this.createHead();
        this.createLeftHand();
    }

    createRightLeg(){
        this.rightLeg = this.scene.add.image(6,-5,"player","leg")
        .setName("rightLeg")
        .setScale(0.35)
        .setOrigin(0.5);

        this.add(this.rightLeg)
    }

    createLeftLeg(){
        this.leftLeg = this.scene.add.image(-3,-5,"player","leg")
        .setName("leftLeg")
        .setScale(0.35)
        .setOrigin(0.5);

        this.add(this.leftLeg)
    }

    createRightHand(){
        this.rightHand = this.scene.add.image(4,-28,"player","hand")
        .setName("rightHand")
        .setScale(0.4)
        .setOrigin(0.5);
        this.rightHand.rotation -= 0.1;

        this.add(this.rightHand)
    }

    createBody(){
        this.playerBody = this.scene.add.image(0,-36,"player","body")
        .setName("body")
        .setScale(0.4)
        .setOrigin(0.5);

        this.add(this.playerBody)
    }

    createHead(){
        this.head = this.scene.add.image(0,-90,"player","head")
        .setName("head")
        .setScale(0.32)
        .setOrigin(0.5);

        this.add(this.head)
    }

    createLeftHand(){
        this.leftHand = this.scene.add.image(-1,-28,"player","hand")
        .setName("leftHand")
        .setScale(0.4)
        .setOrigin(0.5);
        this.leftHand.rotation -= 0.4;

        this.add(this.leftHand)
    }
}