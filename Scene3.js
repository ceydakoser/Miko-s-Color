class Scene3 {
	constructor(restart_btn_img, fail_img, success_img) {
		this.failImg = loadImage(fail_img);
		this.successImg = loadImage(success_img);
		
		// Create A button to restart the game
		this.restartBtn = new Button(restart_btn_img);
		this.restartBtn.name = "RESTART";
		this.restartBtn.x = width*0.5;	// x position of the button
		this.restartBtn.y = height-200;	// y position of the button
		
		
		this.disable();
	}
	
	display() {
		push();
		
		// Draw Background Image
		// It the score < 0 than it means the user failed else success and display the score
		// we can use the global score variable
		if(totalScore < targetScore) {
			image(this.failImg, width/2, height/2, width, height);	
		}else if(totalScore >= targetScore){
			image(this.successImg, width/2, height/2, width, height);	
			
			// Display The current score
			textAlign(CENTER);
			textSize(120);
			fill("#533e1f");
			text(totalScore, width / 2, 300);
		}
		
		
		// Display the start game button for each results whether the user failed or succeeds
		this.restartBtn.display();
		
		pop();
	}
	
	// DISABLE scene interaction
	disable() {
		this.restartBtn.disable();
	}
	
	// ENABLE scene interaction
	enable() {
		this.restartBtn.enable();
	}
}