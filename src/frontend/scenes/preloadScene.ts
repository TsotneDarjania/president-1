export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("road", "assets/road.png");

    //load player
    this.load.atlas(
      "player",
      "assets/player/player.png",
      "assets/player/player.json"
    );

    this.loadRegionAssets();

    this.load.image("test", "assets/player/test.png");
    this.load.image("hideLine", "assets/hide-line.png");

    this.load.image(
      "forest-tile-sprite-1",
      "assets/nature/forest-tile-sprite-1.png"
    );

    //flags
    this.load.image("georgia", "assets/flags/georgia.png");
  }

  loadRegionAssets() {
    this.load.image("smallVillage", "assets/regionImages/smallVillage.png");
    this.load.image("bigVillage", "assets/regionImages/bigVillage.png");
    this.load.image("smallCity", "assets/regionImages/smallCity.png");
    this.load.image("mediumCity", "assets/regionImages/mediumCity.png");
    this.load.image("bigCity", "assets/regionImages/bigCity.png");
  }

  create() {
    this.scene.start("GameScene");
  }
}
