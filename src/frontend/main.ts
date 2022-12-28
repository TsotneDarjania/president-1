import 'phaser'

import PreloadScene from './scenes/preloadScene'


const DEFAULT_WIDTH = 1024
const DEFAULT_HEIGHT = 800

const config: Phaser.Types.Core.GameConfig = {
  backgroundColor: '#aaaaaa',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [
     PreloadScene, 
  ],
  physics: {
    default: 'matter',
    arcade: {
      debug: true,
      gravity: { y: 100}
    }
  }
}

window.addEventListener('load', () => {
  let game = new Phaser.Game(config)
})


