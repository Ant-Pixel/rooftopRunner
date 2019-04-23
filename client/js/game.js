let gameState = {
  create: () => {
    gameState.mapObjects = [];
    gameState.mapObjects.push(gameState.createRectangle(800, 0, 300, 200));
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
          if (mapObj.isRectangle)
          {
            newObj = gameState.createGap(800, 100);
          }
          else
          {
            newObj = gameState.createRectangle(800, 0, 300, 200);
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
  },
};
