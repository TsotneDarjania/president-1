import { Tweens } from "phaser";
import { animationParams, playrAnimationData } from "../data/playerAnimationDatas";

    


export default class AnimationsController {

    animationMode : string;

    scene : Phaser.Scene;
    animationData : playrAnimationData;
    targets : Array<Phaser.GameObjects.Image>

    defaultTargets : Array<animationParams> = [];

    tween : Tweens.Tween;

    constructor(scene : Phaser.Scene,
        defaultAnimation : string, 
        animationsData : playrAnimationData,
        targets : Array<Phaser.GameObjects.Image>
        ) {
            
        this.scene = scene;
        this.animationMode = defaultAnimation;

        this.animationData = animationsData;
        this.targets = targets;

        this.getDefaultAnimationData(targets);
        this.createAnimations(targets);
    }

    getDefaultAnimationData(targets : Array<Phaser.GameObjects.Image>){
        targets.forEach(target => {
            this.defaultTargets.push(
                { 
                    x : target.x, 
                    y : target.y, 
                    rotation : target.rotation,
                    scale : target.scale, 
                    repeat : 0,
                    duration : 100, 
                    yoyo : false
                }
            );
        });
    }

    changeAnimationMode(newMode : string){
        this.animationMode =  newMode;
        this.scene.tweens.killTweensOf(this.targets);
        this.defaultAnimation(this.targets);
    }

    defaultAnimation(targets :  Array<Phaser.GameObjects.Image>){

        let index = 0;

        targets.forEach(target => {
            this.scene.tweens.add({
                targets : target,
                x : this.defaultTargets[index].x,
                y : this.defaultTargets[index].y,
                rotation : this.defaultTargets[index].rotation,
                scale : this.defaultTargets[index].scale,
                duration : 10,
                onComplete : () => {
                    this.createAnimations(this.targets);
                }
            })

            index += 1;

        });
    }

    createAnimations(targets :  Array<Phaser.GameObjects.Image>){
        targets.forEach(target => {
            const params = this.animationData.animations[this.animationMode][target.name];
            this.tween = this.scene.tweens.add({
                targets : target,
                x : target.x + (params.x),
                y : target.y + (params.y),
                rotation : target.rotation + (params.rotation),
                scale : params.scale,
                repeat : params.repeat,
                duration : params.duration,
                yoyo : params.yoyo,
                useFrames : true,
                ease : Phaser.Math.Easing.Linear,
                onRepeat : () => {
               
                }
            })
        });
    }
}