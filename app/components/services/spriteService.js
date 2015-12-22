app.factory('spriteService', function() {
  	return {
  		//sprite vars
  		s_bird:null,
		s_bg:null,
		s_fg:null, 
		s_pipeNorth:null,
		s_pipeSouth:null,
		s_text:null,
		s_score:null,
		s_splash:null,
		s_buttons:null,
		s_numberS:null,
		s_numberB:null,
  		
  		Sprite : function(img, x, y , width, height){
  			this.img = img;
			this.x = x * 2;
			this.y = y * 2
			this.width = width * 2;
			this.height = height * 2;
  		},



		initSprites : function(img){

			s_bird = [
				new this.Sprite(img, 156, 115, 17, 12),
				new this.Sprite(img, 156, 128, 17, 12),
				new this.Sprite(img, 156, 141, 17, 12)
			];
			
			s_bg = new this.Sprite(img,   0, 0, 138, 114);
			s_bg.color = "#70C5CF"; // save background color
			s_fg = new this.Sprite(img, 138, 0, 112,  56);
			
			s_pipeNorth = new this.Sprite(img, 251, 0, 26, 200);
			s_pipeSouth = new this.Sprite(img, 277, 0, 26, 200);
			
			s_text = {
				FlappyBird: new this.Sprite(img, 59, 114, 96, 22),
				GameOver:   new this.Sprite(img, 59, 136, 94, 19),
				GetReady:   new this.Sprite(img, 59, 155, 87, 22)
			}
			s_buttons = {
				Rate:  new this.Sprite(img,  79, 177, 40, 14),
				Menu:  new this.Sprite(img, 119, 177, 40, 14),
				Share: new this.Sprite(img, 159, 177, 40, 14),
				Score: new this.Sprite(img,  79, 191, 40, 14),
				Ok:    new this.Sprite(img, 119, 191, 40, 14),
				Start: new this.Sprite(img, 159, 191, 40, 14)
			}

			s_score  = new this.Sprite(img, 138,  56, 113, 58);
			s_splash = new this.Sprite(img,   0, 114,  59, 49);

			s_numberS = new this.Sprite(img, 0, 177, 6,  7);
			s_numberB = new this.Sprite(img, 0, 188, 7, 10);

			/**
			 * Draw number to canvas
			 * 
			 * @param  {CanvasRenderingContext2D} ctx context used for drawing
			 * @param  {number} x      x-position
			 * @param  {number} y      y-position
			 * @param  {number} num    number to draw
			 * @param  {number} center center to offset from
			 * @param  {number} offset padd text to draw right to left
			 */
			s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, offset) {
				num = num.toString();

				var step = this.width + 2;
				
				if (center) {
					x = center - (num.length*step-2)/2;
				}
				if (offset) {
					x += step*(offset - num.length);
				}

				for (var i = 0, len = num.length; i < len; i++) {
					var n = parseInt(num[i]);
					ctx.drawImage(img, step*n, this.y, this.width, this.height,
						x, y, this.width, this.height)
					x += step;
				}
			}
		
		}


  	}
  	


});
