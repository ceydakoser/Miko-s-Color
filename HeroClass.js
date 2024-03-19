class HeroClass {
	constructor(src, x, y) {
		this.src = src;													// File path of the image
		//this.img = createImg(this.src,'');			// Create image to display
		this.img = loadImage(this.src);
		this.x = mouseX;															// x position of the image	
		this.y = mouseY;															// y position of the image
		this.w = this.img.width;								// width of the image
		this.h = this.img.height;								// height of the image
		
		this.disable();													// disable interaction
		
	}

	display() {
		push();
		
		this.x = mouseX;
		this.y = mouseY;

		var x = (windowWidth - width) / 2;			// center position of the canvas x
  	var y = (windowHeight - height) / 2;		// center position of the canvas y
		
		// Set the image position
		//		this.img.style("background-color", "#ff0000");

		//this.img.position(x+this.x,y+this.y - this.img.height);
		image(this.img, this.x, this.y, this.w, this.h);
		// View debug or hide debug box
		if(this.debug == true) {
			noFill();
			stroke(255,0,0);
			rect(this.x, this.y - this.img.height, this.w, this.h);
		}
		pop();
		
	}
	
	// Set size of the image
	setSize(w,h) {
		this.w = w;
		this.h = h;
	}

	// DISABLE scene interaction
	disable() {
		//this.img.hide();
	}

	// ENABLE scene interaction
	enable() {
		//this.img.show();
	}
}