const config = {};
config.default = {};
config.default.gameSpecs = {
    width: 800,
    height: 600,
    renderType: Phaser.AUTO,
    parentID : "gameContainer"
};
config.loadState = {
    style: {
        font: "30px Courier",
        fill: "#000"
    },
    label: {
        text : {
            x: 80,
            y: 150,
            print: "loading..."
        }
    }
};
config.bootState = {};
config.menuState = {
    logo : {
        x: config.default.gameSpecs.width * 0.5,
        y: config.default.gameSpecs.height * 0.5,
        spriteKey: "menuLogo",
        spriteSrc: "assets/img/phaserLogo.png"
    }
};
config.gameState = {
    gap: {
        width: 100,
        x: config.default.gameSpecs.width
    },
    rectangle: {
        width: 300,
        height: 200,
        x: config.default.gameSpecs.width,
        y: 0
    }
};

config.testStage1 = {
    player: {
        x: config.default.gameSpecs.width * 0.1,
        y: config.default.gameSpecs.height * 0.1,
        spriteKey: "player1sprite",
        spriteSrc: "assets/img/phaser-dude.png"
    },
    platform: {
        x: config.default.gameSpecs.wdith * 0.5,
        y: config.default.gameSpecs.height * 0.5,
        spriteKey: "platform",
        spriteSrc: "assets/img/platform.png"
    }
}

config.default.stateManager = {
    bootState: "boot",
    loadState: "load",
    menuState: "menu",
    gameState: "game",
    testStage1: "testStage1",
}



let isNodeJsCompatible = typeof module !== "undefined"
if (isNodeJsCompatible)  {
    module.exports = config;
}
