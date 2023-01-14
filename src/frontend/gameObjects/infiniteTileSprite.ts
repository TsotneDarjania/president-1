export default class InfiniteTileSprite extends Phaser.GameObjects.TileSprite {
  constructor(
    scene: Phaser.Scene,
    public readonly targetArea: Phaser.Geom.Rectangle,
    textureKey: string,
    frameKey?: string | number
  ) {
    super(scene, 0, 0, 10, 10, textureKey, frameKey);

    this.addToScene().setOrigin(0);
  }

  renderWebGL(
    renderer: Phaser.Renderer.WebGL.WebGLRenderer,
    src: this,
    camera: Phaser.Cameras.Scene2D.Camera,
    parentMatrix: Phaser.GameObjects.Components.TransformMatrix
  ) {
    /**
     * Update size
     */
    const worldView = camera.worldView;
    /** Check if gameobject is in view */
    if (
      !Phaser.Geom.Intersects.RectangleToRectangle(worldView, this.targetArea)
    )
      return;
    this.setPosition(
      Math.max(this.targetArea.left, worldView.left),
      Math.max(this.targetArea.top, worldView.top)
    )
      .setSize(
        Math.min(worldView.right, this.targetArea.right) - this.x,
        Math.min(worldView.bottom, this.targetArea.bottom) - this.y
      )
      .setTilePosition(
        Math.max(worldView.left - this.targetArea.left, 0),
        Math.max(worldView.top - this.targetArea.top, 0)
      );

    //@ts-ignore
    super.renderWebGL(renderer, src, camera, parentMatrix);
  }

  private addToScene() {
    return this.scene.add.existing(this);
  }
}
