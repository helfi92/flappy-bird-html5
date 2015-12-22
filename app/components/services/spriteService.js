app.factory('spriteService', function() {
  	return {
  		init : function(){
  			//sprite vars
			var 
			s_bird, 
			s_bg, 
			s_fg, 
			s_pipeNorth,
			s_pipeSouth,
			s_text,
			s_score,
			s_splash,
			s_buttons,
			s_numberS,
			s_numberB;	

			//sprite class
			function Sprite(img, x, y, width, height){
				this.img = img;
				this.x = x * 2;
				this.y = y * 2
				this.width = width * 2;
				this.height = height * 2;	
			};

			//draw sprite to canvas
			Sprite.prototype.draw = function(ctx, x , y){
				ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
					x, y, this.width, this.height);
			};

			//init sprites
  		}
  	}


});
