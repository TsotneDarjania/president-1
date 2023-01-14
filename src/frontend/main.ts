import 'phaser'
import GameScene from './scenes/gameScene'

import PreloadScene from './scenes/preloadScene'


const DEFAULT_WIDTH = 1500
const DEFAULT_HEIGHT = 900

const config: Phaser.Types.Core.GameConfig = {
  type : Phaser.WEBGL,
  backgroundColor: '#EBE97F',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [
     PreloadScene, 
     GameScene
  ],
  physics: {
    default : "arcade",
    arcade: {
      debug: false,
      gravity: { y:1500}
    }
  }
}

window.addEventListener('load', () => {
  let game = new Phaser.Game(config)
})


