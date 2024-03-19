class StartScreen{
	constructor(startBtn, startBackground, heroImage, font){
		this.start_bg = loadImage(startBackground);
		this.hero_img = loadImage(heroImage);
		
		// Create A button to start the game
		this.startBtn = new Button(startBtn);
		this.startBtn.name = "START";
		this.startBtn.x = width*0.5;	// x position of the button
		this.startBtn.y = height*0.75;	// y position of the button
		
		// Disable scene interaction by default
		this.disable();
		
	}
		
	display() {
		// Draw Background Image
		image(this.start_bg, width/2, height/2, width, height);
		image(this.hero_img, width/2, height/2.5, width/4, height/4);
		
		//Miko's Color
		push();
		fill('#AD0CC1')
		textAlign(CENTER);
		textFont(font);
		textSize(100);
		text("Miko's Color", width/2, height/4);
		pop();
		
		// Display the start game button
		this.startBtn.display();
	}
	
	// A function to DISABLE scene interaction so it cannot interfere with other scenes
	disable() {
		this.startBtn.disable();
	}
	
	// ENABLE scene interaction
	enable() {
		this.startBtn.enable();
	}
}