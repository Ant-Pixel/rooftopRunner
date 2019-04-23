const testStage1 = {};
testStage1.create = () => {
    console.log("Test stage create state!");

    console.log("We are in the create state!!!");


    //create player and add physics
    let playerData = [
        config.testStage1.player.x,
        config.testStage1.player.y,
        config.testStage1.player.spriteKey
     ];
    let player = game.add.sprite(...playerData);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;
    testStage1.player = player;

    //create platform group and add physics
    let platforms = game.add.physicsGroup();
    let platformData = [
        config.testStage1.platform.x,
        config.testStage1.platform.y,
        config.testStage1.platform.spriteKey
     ];
    platforms.create(...platformData);
    platforms.setAll('body.immovable', true); //TODO ean: research what the 2nd param for setAll is
                                              //Eric: it's the value to assign to the 1st param
    testStage1.platforms = platforms;

    //create the game keys
    testStage1.moveKeys = game.input.keyboard.createCursorKeys();
    testStage1.jumpBtn = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

testStage1.update = () => {
    game.physics.arcade.collide(testStage1.player, testStage1.platforms);

    if (testStage1.jumpBtn.isDown) {
      if (testStage1.player.body.onFloor() || testStage1.player.body.touching.down) {
          //testStage1.player.body.gravity.y = 0;
          testStage1.player.body.velocity.y = -300;
      }
    }
}
