




var myLib = new function(){


  this.Point = function(fp_InitX, fp_InitY)
               {
                 this.x = fp_InitX;
				 this.y = fp_InitY;
						   
				 this.add = function(fp_point)
				 {
				   return new myLib.Point(this.x + fp_point.x, this.y + fp_point.y);
                 }
				 
				 this.sub = function(fp_point)
				 {
				   return new myLib.Point(this.x - fp_point.x, this.y - fp_point.y);
                 }
				 
				 
				 
               };










    // var internalFunction = function() {

    // };

    // this.publicFunction = function() {

    // };
	
	
	
	
	
};



































