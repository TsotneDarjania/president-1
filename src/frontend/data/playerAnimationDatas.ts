


export interface playrAnimationData {
    animations : {
        idle : {
            head : animationParams,
            body : animationParams,
            leftHand : animationParams,
            rightHand : animationParams,
            leftLeg : animationParams,
            rightLeg : animationParams,
        },
        walk : {
            head : animationParams,
            body : animationParams,
            leftHand : animationParams,
            rightHand : animationParams,
            leftLeg : animationParams,
            rightLeg : animationParams,
        }
    }
}

export interface animationParams {
    x : number,
    y : number,
    rotation : number,
    scale : number
    repeat : number,
    duration : number,
    yoyo : boolean
}


export const AnimationData : playrAnimationData = {
    animations : { 
        idle : { 
            head : {
                x : 0,
                y : 3,
                rotation : 0,
                scale : 0.32,
                repeat : -1,
                duration : 10,
                yoyo : true
            },
            body : {
                x : 0,
                y : 0,
                rotation : 0,
                scale : 0.4,
                repeat : -1,
                duration : 10,
                yoyo : true
            },
            leftHand : {
                x :  4,
                y :  -1.5,
                rotation : -0.3,
                scale : 0.4,
                repeat : -1,
                duration : 10,
                yoyo : true
            },
            rightHand : {
                x : 1.4,
                y : 1.4,
                rotation : -0.07,
                scale : 0.4,
                repeat : -1,
                duration : 10,
                yoyo : true
            },
            leftLeg : {
                x : 0,
                y : 0,
                rotation : 0,
                scale : 0.35,
                repeat : -1,
                duration : 10,
                yoyo : true
            },
            rightLeg : {
                x : 0,
                y : 0,
                rotation : 0,
                scale : 0.35,
                repeat : -1,
                duration : 10,
                yoyo : true
            },
        },

        walk : { 
            head : {
                x : 9.5,
                y : 5,
                rotation : +0.3,
                scale : 0.32,
                repeat : -1,
                duration : 5,
                yoyo : true
            },
            body : {
                x : 0,
                y : 0,
                rotation : 0,
                scale : 0.4,
                repeat : -1,
                duration : 7,
                yoyo : true
            },
            leftHand : {
                x : 10,
                y : -8,
                rotation : -0.8,
                scale : 0.4,
                repeat : -1,
                duration : 7,
                yoyo : true
            },
            rightHand : {
                x : -10,
                y : 2,
                rotation : 0.8,
                scale : 0.4,
                repeat : -1,
                duration : 7,
                yoyo : true
            },
            leftLeg : {
                x : 13,
                y : -9,
                rotation : -1.2,
                scale : 0.35,
                repeat : -1,
                duration : 4,
                yoyo : true
            },
            rightLeg : {
                x : -13,
                y : -9,
                rotation : 1.2,
                scale : 0.35,
                repeat : -1,
                duration : 4,
                yoyo : true
            },
        },
    },
}