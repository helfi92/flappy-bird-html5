app.controller('landingPageController',['$scope','spriteService', function($scope,spriteService){
	
	spriteService.init();

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

	}






}]);
