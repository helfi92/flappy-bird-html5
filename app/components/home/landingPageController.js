app.controller('landingPageController',['$scope','spriteService', function($scope,spriteService){
	
	
	spriteService.Sprite.prototype.draw = function(ctx, x , y){
			ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
				x, y, this.width, this.height);
	};
	sprite = spriteService;

	var
	//game vars
	canvas,
	ctx,
	width,
	height,

	fgpos = 0,
	frames = 0,
	score = 0,
	best = localStorage.getItem("best") || 0,

	//state vars
	currentstate,
	states = {
		Splash : 0,
		Game : 1,
		Score : 2
	},

	//game objects

	//ok btn init in main()
	okbtn,

	bird = {
		x: 60,
		y: 0,

		frame: 0,
		velocity: 0,
		animation : [0,1,2,1], //smooth transition of images from sprites

		rotation: 0,
		radius: 12,

		gravity: 0.25,
		_jump: 4.6,

		jump : function(){
			this.velocity = - this._jump;
		},

		//update sprite animation and position of bird
		//===UNCOMPLETE
		update: function(){

		},
		draw : function(ctx){
			ctx.save();

			ctx.translate(this.x, this.y);
			ctx.rotate(this.rotation);

			var n = this.animation[this.frame];

			//draw bird with center in origo
			s_bird[n].draw(ctx, -s_bird[n].width/2, -s_bird[n].height/2);

			ctx.restore();
		}

	};
	function onpress(evt) {

		switch (currentstate) {

			// change state and update bird velocity
			case states.Splash:
				currentstate = states.Game;
				bird.jump();
				break;

			// update bird velocity
			case states.Game:
				bird.jump();
				break;

			// change state if event within okbtn bounding box
			case states.Score:
				// get event position
				var mx = evt.offsetX, my = evt.offsetY;

				if (mx == null || my == null) {
					mx = evt.touches[0].clientX;
					my = evt.touches[0].clientY;
				}

				// check if within
				if (okbtn.x < mx && mx < okbtn.x + okbtn.width &&
					okbtn.y < my && my < okbtn.y + okbtn.height
				) {
					pipes.reset();
					currentstate = states.Splash;
					score = 0;
				}
				break;

		}
	}

	//start and init game
	function main() {
		// create canvas and set width/height
		canvas = document.createElement("canvas");

		width = window.innerWidth;
		height = window.innerHeight;

		var evt = "touchstart";
		if (width >= 500) {
			width  = 320;
			height = 480;
			canvas.style.border = "1px solid #000";
			evt = "mousedown";
		}

		// listen for input event
		document.addEventListener(evt, onpress);

		canvas.width = width;
		canvas.height = height;
		if (!(!!canvas.getContext && canvas.getContext("2d"))) {
			alert("Your browser doesn't support HTML5, please update to latest version");
		}
		ctx = canvas.getContext("2d");

		currentstate = states.Splash;
		// append canvas to document
		document.body.appendChild(canvas);

		// initate graphics and okbtn
		var img = new Image();
		img.onload = function() {
			console.log('sprite is: ', sprite);
			sprite.initSprites(img);
			ctx.fillStyle = s_bg.color;

			okbtn = {
				x: (width - s_buttons.Ok.width)/2,
				y: height - 200,
				width: s_buttons.Ok.width,
				height: s_buttons.Ok.height
			}

			run();
		}
		img.src = "assets/img/sheet.png";
	}
	//start and update game loop
	function run() {
		var loop = function() {
			update();
			render();
			window.requestAnimationFrame(loop, canvas);
		}
		window.requestAnimationFrame(loop, canvas);
	}

	//update foreground,pipe and bird
	function update() {
		frames++;

		if (currentstate !== states.Score) {
			fgpos = (fgpos - 2) % 14;
		} else {
			// set best score to maximum score
			best = Math.max(best, score);
			localStorage.setItem("best", best);
		}
		if (currentstate === states.Game) {
			pipes.update();
		}

		bird.update();
	}	

	function render(){

	}


	main();


}]);
