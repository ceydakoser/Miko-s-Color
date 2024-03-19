//-----Starting Screen----//
//Scene1 Properties
let s1;
let s1_Background = "Start_Background.png";
let s1_Hero = "Miko_Transparent.png"
let s1_Start_Button_Src = "Button.png";
let font;

// -----------------------------------------------------
// SCENE2 Properties
// -----------------------------------------------------
let s2; 																// Scene 2 Class variable
let s2_Hero_Src = "Miko_Transparent.png";					// Hero image for the HeroClass
let s2_GameTime = 20;

// -----------------------------------------------------
// SCENE3 Properties
// -----------------------------------------------------
let s3; // Scene 3
let s3_Fail_Bg = "Fail.png";						// Background image of the scene3 -> fail
let s3_Success_Bg = "Success.png";			// Background image of the scene3 -> success
let s3_ReStartBtn_Src = "Button.png";// Restart Button image of the scene3

// -----------------------------------------------------
// Global Game Variables
// -----------------------------------------------------
let currentScene = 1;										// Variable stores the current game scene 1=Scene1, 2=Scene2, 3=Scene3 
let totalScore = 0;		
let targetScore = 40;

function preload(){
	font = loadFont("JumboSale_Trial.otf");
}

function setup() {
	createCanvas(800, 800);
	imageMode(CENTER);
		
	// Init Scene 1 by passing the start button, game background image
	s1 = new StartScreen(s1_Start_Button_Src, s1_Background, s1_Hero, font);
	s1.enable();											 // Enable scene
	
	// Init Scene 2 by passing Image hero, image banana, image background
	s2 = new Scene2(s2_Hero_Src);
	
	// Init Scene 3 by passing the restart button, fai bg and success bg
	s3 = new Scene3(s3_ReStartBtn_Src, s3_Fail_Bg, s3_Success_Bg);
	
	// Event Listeners that are triggered from scene1, scene2, and scene3
	addEventListener("BUTTON_PRESSED", gameStart);
	addEventListener("GAME_END", gameEnd);
}

function draw() {
	background(255);

	// Draw relevant scene according to the value of currentScene
	// currentScene = 1 --> Draw Game intro scene
	if (currentScene == 1) {
		s1.display();
	} 
	
	// currentScene = 2 --> Draw Game play scene
	else if (currentScene == 2) {
		s2.display();
		
	} 
	
	// currentScene = 3 --> Draw Game end scene
	else if (currentScene == 3) {
		s3.display();
	}
}

function gameEnd() {
	currentScene = 3
	switchGameScene(s3);
}

function gameStart(e) {
	if (e.name == "START") {
		//print("Start Game Button Pressed");
		switchGameScene(s2);
		currentScene = 2;
	}
	
	else if(e.name == "RESTART") {
		switchGameScene(s1);
		currentScene = 1;
	}
}


function switchGameScene(scene) {
	// Disable all scenes first
	s1.disable();
	s2.disable();
	s3.disable();
	
	// Then enable the current Scene
	scene.enable();
}

function keyPressed() {
	if(key == 's') {
		saveCanvas('myCanvas', 'jpg');
	}
}