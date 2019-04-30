let gameState = {
  create: () => {
    gameState.mapObjects = [];
    let firstObjData = [config.gameState.rectangle.x, config.default.gameSpecs.height-config.gameState.rectangle.height, config.gameState.rectangle.width, config.gameState.rectangle.height];
    gameState.mapObjects.push(gameState.createRectangle(...firstObjData));
  },

  update: () => {
    for (let i = gameState.mapObjects.length - 1; i >= 0; i--)
    {
      let mapObj = gameState.mapObjects[i];
      mapObj.x -=5;

      let rightEdge = mapObj.x + mapObj.width;

      if (i == gameState.mapObjects.length - 1)
      {
        if (rightEdge < 800)
        {
          let newObj;
          let newObjData;
          if (mapObj.isRectangle)
          {
            newObjData = [config.gameState.gap.x, config.gameState.gap.width];
            newObj = gameState.createGap(...newObjData);
          }
          else
          {
            newObjData = [config.gameState.rectangle.x, config.default.gameSpecs.height-config.gameState.rectangle.height, config.gameState.rectangle.width, config.gameState.rectangle.height];
            newObj = gameState.createRectangle(...newObjData);
          }
          gameState.mapObjects.push(newObj);
        }
      }

      if (rightEdge < 0)
      {
        mapObj.destroy();
        gameState.mapObjects.splice(i, 1);
      }
    }
  },

  createRectangle: (x, y, width, height) => {
    let graphics = game.add.graphics(x, y);
    graphics.beginFill(0xFFFFFF);
    graphics.drawRect(0, 0, width, height);
    graphics.isRectangle = true;
    return graphics;
  },

  createGap: (x, width) => {
    let gap = {
      x: x,
      width: width,
      destroy: () => {},
      isGap: true,
    };
    return gap;
  }
};
