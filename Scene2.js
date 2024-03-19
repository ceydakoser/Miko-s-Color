class Scene2 {
	constructor(hero_img) {
		
		// initialize HeroClass to view hero
		// Pass the parameters to the HeroClass(imageFileName, x, y)
		this.hero = new HeroClass(hero_img, width / 2, height/2);
		this.hero.setSize(50, 50);	// Set the width and height of the Hero Image
		this.disable();								// Disable Scene Interaction
		
		// Initialize Scene2 objects
		this.initSceneProps();
		
		//Color
		this.myColors = ["#FE0000", "#13AE4B", "#212CDB", "#00EAFF", "#D900FF", "#ced90b", "#eff0e6"]; 
		
		// dice
		this.cId = floor(random(0, this.myColors.length));
		
		// target color
		this.targetCl = this.myColors[this.cId];

		this.seedVal = random(99999);
	}
	
	initSceneProps() {
		// reset the score
		totalScore = 0;
		
		// Reset Time
		this.cTime = millis();
	}
	
	display() {
		push();	// Good practice to use push() and pop() for evertying we display for the current Class. It is not a must.
		
		randomSeed(this.seedVal);
		// Display Hero
		this.checkboard();
		
		this.cPix = get(mouseX,mouseY);
		
		if(this.cPix[0] === this.hexToRgb(this.targetCl)[0]){ 
			totalScore++;
			this.seedVal = random(9999);
			randomSeed(this.seedVal);
			this.cId = floor(random(0, this.myColors.length));
			this.targetCl = this.myColors[this.cId];
			this.checkboard();
		}
		
		/* 
		if(this.cPix[0] === this.hexToRgb(this.targetCl)[0]){
			//Debug
		console.log("====================");
		//console.log(this.hexToRgb(this.cPix));
		console.log(this.targetCl);
		console.log(this.hexToRgb(this.targetCl)[0]); 
		console.log(this.cPix[0]);
		console.log("====================");
		}
		*/
		
		push();
		tint(this.targetCl);
		//filter(INVERT);
		this.hero.display();
		pop();
		// DISPLAY GAME TIME
		// Measure the current time
		var cTime = floor((millis() - this.cTime ) / 1000);
		
		// Set the text to show remaining time
		this.tTxt = s2_GameTime - cTime;
		
		

		// If the "totalScore" gets lower than 0, finish the game
		// or if the this.tTxt time reaches 0, finish the game
		if (this.tTxt <= 0) {
			// Print a message to the console for debugging purposes
			print("Game finished, Your Score is : " + totalScore);
			
			// EVENT DISPATCHER 
			// It sends a message to the "mySketch" file to finish the game
			// We can listen the message in "mySketch" file by adding a event listener as follows
			// Check line 37 in "mySketch" --> addEventListener("GAME_END", gameEnd);
			const event = new CustomEvent("GAME_END");	// Define the event
    	dispatchEvent(event);												// Trigger the event
		}

		// Score text background rectangle
		noStroke();																		// Don't add strokes to the Score and Remaining time text
		fill(30);																			// Fill color of the bg rectangle
		rect(0, 0, width, 50);												// Draw the rectangle
		
		// display time txt		
		fill(255);																		// Fill color of the time text
		text("TIME: " + this.tTxt, width - 70, 32);		// Display the remaning time
		
		// DISPLAY SCORE
		// Set Text and Color
		fill(255);																	 	// Fill color of the Score text
		text("SCORE: " + totalScore, 20, 30);					// Display the current score of the player.

		//DISPLAY TARGET SCORE
		//Set Text and Color
		fill(255);
		text("TARGET SCORE: " + targetScore, width/2-100, 30);
		
		pop(); // End of push()
		
	}
	
	hexToRgb(hex) { 
		/* Extract the red (R), green (G), and blue (B) and
		turns them to hexadecimal value */
		let r = parseInt(hex.substring(1, 3), 16);  
		let g = parseInt(hex.substring(3, 5), 16);
		let b = parseInt(hex.substring(5, 7), 16);

		// Return an array with the RGBA values
		return [r,g,b,255];
	}
	
	// Function to draw playground
	checkboard(){
		push();
		translate(100,125);
		//translate(width,height);
		let count = 1;
		while(count == 1){
			for(let i = 0; i<600; i+=50){
				for(let j=0; j<600; j+=50){
					this.randCol=random(this.myColors.length);
					this.randCol = floor(this.randCol);
					fill(this.myColors[this.randCol]);
					strokeWeight(5);
					stroke(10);
					square(i, j, 50);
					
					if(j >= 500){
						count = 0;
					}
				}
			}
		}
		pop();
	}
	
	// A function to DISABLE scene interaction so it cannot interfere with other scenes
	disable() {
		this.hero.disable();			// Disable interaction for hero
	}

	// A function to ENABLE scene interaction
	enable() {
		this.hero.enable();				// Enable HeroClass interaction	
		this.initSceneProps();		// Call the function to reset the Banana array and resetting the remaining time.
	}
}