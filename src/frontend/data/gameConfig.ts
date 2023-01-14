
export interface GameConfig {
    player : {
        positions : Positions
    }
    mainCamera : {
        
    }
}

interface Positions {
    startPosition_X : number
    startPosition_Y : number
}

export const GameConfig : GameConfig  = {
    player : {
        positions : {
            startPosition_X : 41000,
            startPosition_Y : 350,
        }
    },
    mainCamera : {

    }
}