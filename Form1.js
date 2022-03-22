class Form1 {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
   this.title=createElement('h2');
   this.title2=createElement('h2');
   this.title3=createElement('h2');
  }

  setElementsPosition() {
    this.title.position(width / 2 - 120, height / 2 - 250);
    this.title2.position(width / 2 - 420, height / 2 - 200);
    this.title3.position(width / 2 - 460, height / 2 - 150);
    this.input.position(width / 2 - 110, height / 2 -20);
    this.playButton.position(width / 2 - 90, height / 2 + 50);
   
  }

  setElementsStyle() {
   
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.title.class("greeting");
    this.title2.class("greeting");
    this.title3.class("greeting");
  }

  hide() {
  
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
     this.title.hide();
     this.title2.hide();
     this.title3.hide();
      player1name = this.input.value();
      gameState=1;
    });
  }

  display() {
    background(underwaterimg)
    this.title.html("Finding Treasure!");
    this.title2.html("Find the gold and save the diver from the dangerous fish!")
    this.title3.html("Collect pearls to increase your life and gold to increase your score!")
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}

