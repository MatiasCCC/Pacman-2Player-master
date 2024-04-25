class GameMenu {
  constructor(ctx, gameWorldObject) {
    this.ctx = ctx;
    this.gameWorldObject = gameWorldObject;
    this.currentSelectedMenu = GAME_STATE.PLAYER_VS_PLAYER;
    this.eventAdded = false;
    
    // Image selection states for players
    this.player1ImageSelection = 0;
    this.player2ImageSelection = 0;
    // Arrays of images for each player's selections
    this.player1Images = ['image/p11.png', 'image/p12.png', 'image/p13.png'];
    this.player2Images = ['image/p21.png', 'image/p22.png', 'image/p23.png'];
    

    this.addGameMenuControls = (e) => {
      if (e.keyCode == 13) {
        this.initiateGame();
      }
/*      if (e.keyCode === PLAYER1_CONTROL_KEY.UP) {
        if (this.currentSelectedMenu != GAME_STATE.SINGLE_PLAYER) {
          this.currentSelectedMenu = this.currentSelectedMenu - 100;
        }
      }*/ 

      if (e.keyCode === PLAYER1_CONTROL_KEY.DOWN) {
        if (this.currentSelectedMenu != GAME_STATE.PLAYER_VS_PLAYER) {
          this.currentSelectedMenu = this.currentSelectedMenu + 100;
        }
      }
        // Player 1 cycles images with left and right keys
      if (e.keyCode === PLAYER1_CONTROL_KEY.RIGHT) {
        this.player1ImageSelection = (this.player1ImageSelection + 1) % this.player1Images.length;
        this.draw();
      } else if (e.keyCode === PLAYER1_CONTROL_KEY.LEFT) {
        this.player1ImageSelection = (this.player1ImageSelection - 1 + this.player1Images.length) % this.player1Images.length;
        this.draw();
      }
      // Player 2 cycles images with left and right keys
      if (e.keyCode === PLAYER2_CONTROL_KEY.RIGHT) {
        this.player2ImageSelection = (this.player2ImageSelection + 1) % this.player2Images.length;
        this.draw();
      } else if (e.keyCode === PLAYER2_CONTROL_KEY.LEFT) {
        this.player2ImageSelection = (this.player2ImageSelection - 1 + this.player2Images.length) % this.player2Images.length;
        this.draw();
      }
    };
  }

  addMenuControlEvent() {
    if (!this.eventAdded) {
      window.addEventListener("keydown", this.addGameMenuControls, true);
      this.eventAdded = false;
    }
  }

  initiateGame() {
    window.removeEventListener('keydown', this.addGameMenuControls, true);
    this.gameWorldObject.gameState = this.currentSelectedMenu;
    this.gameWorldObject.resetGameComponents();
    this.eventAdded = false;
  }

  draw() {
    this.drawGameOptions();
    this.drawSelectionHighlighter();
      // Draw Player 1's selected image
    this.drawPlayerImage(this.player1Images[this.player1ImageSelection], 100, 100); // Example coordinates
      // Draw Player 2's selected image
    this.drawPlayerImage(this.player2Images[this.player2ImageSelection], 300, 100); 
  }

  drawPlayerImage(imagePath, x, y) {
    let img = new Image();
    img.onload = () => {
      this.ctx.drawImage(img, x, y);
    };
    img.src = imagePath;
  }

  drawSelectionHighlighter() {
    let positionX = 0, positionY = 0;

    switch (this.currentSelectedMenu) {
      case GAME_STATE.SINGLE_PLAYER:
        positionX = 10;
        positionY = 220;
        break;

      case GAME_STATE.PLAYER_VS_PLAYER:
        positionX = 10;
        positionY = 285;
        break;
    }

    this.ctx.strokeStyle = "#ffffff";
    this.ctx.beginPath();
    this.ctx.rect(
      positionX,
      positionY,
      400,
      50
    );
    this.ctx.stroke();
    this.ctx.closePath();
  }


  drawGameOptions() {
    //clear canvas
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    //draw logo
    this.ctx.drawImage(
      PACMAN_LOGO_IMAGE,
      0,
      0,
      500,
      227,
      0,
      0,
      CANVAS_WIDTH,
      200
    );
    //write game menu options
    //writeTextOnCanvasWithSize(this.ctx, 'Single Player Mode', 15, 'white', 20, 250);
    writeTextOnCanvasWithSize(this.ctx, '         EMPEZAR', 15, 'white', 20, 315);
    
  }
  
}
