var gv_MyGame = {};
var gv_LevelComplete = 0;
var gv_LevelDifficulty = 0;
var gv_StandartGameWidth = 800;
var gv_StandartGameHeight = 600;

window.onload = function() {

	//m_FirstBootGame();

};
// window.addEventListener("resize", function() {
    
    // m_DefineGameSizeAndScale();
	// gv_MyGame.game.scale.setGameSize(gv_MyGame.GameWidth, gv_MyGame.GameHeight);

// }, false);
//-------------------------------------------------------------------------------------------------------------------
function m_FirstBootGame()
{
	// gv_MyGame.GameWidth = 1000;
	// gv_MyGame.GameHeight = 800;
	
	//alert("Hello 1");
	
	// alert("Hi 1");
	
	// if((window.innerWidth === 0) || (window.innerHeight === 0))
	// {
	  // alert("Hi 2");
	  // return;
	// }
	
    
	
	//gv_MyGame.game = new Phaser.Game(gv_MyGame.GameWidth, gv_MyGame.GameHeight, Phaser.CANVAS, '');//Phaser.AUTO
	gv_MyGame.game = new Phaser.Game(gv_StandartGameWidth, gv_StandartGameHeight, Phaser.CANVAS, '');
	//m_DefineGameSizeAndScale();
	//Phaser.game.scale.setGameSize(gv_MyGame.GameWidth, gv_MyGame.GameHeight);
	//gv_MyGame.game.scale.setGameSize(gv_MyGame.GameWidth, gv_MyGame.GameHeight);
	//var lv_game = new Phaser.Game(640, 480, Phaser.AUTO, '');

	//Phaser.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// lv_game.scale.pageAlignHorizontally = true;
	// lv_game.scale.pageAlignVertically = true;
	
	//gv_MyGame.game = lv_game;

	gv_MyGame.game.state.add("mavOS", gv_MyGame.mavOS);
    //gv_MyGame.game.state.add("ZackPuzzleGame", gv_MyGame.ZackPuzzleGame);
	//gv_MyGame.game.state.add("CodyPuzzleGame", gv_MyGame.CodyPuzzleGame);

	gv_MyGame.game.state.start("mavOS");

}
//-------------------------------------------------------------------------------------------------------------------
function m_DefineGameSizeAndScale()
{
	
	// gv_MyGame.GameWidth = window.innerWidth;
	// gv_MyGame.GameHeight = window.innerHeight;
	
	gv_MyGame.GameWidth = document.body.clientWidth;
	gv_MyGame.GameHeight = document.body.clientHeight;
	
	//alert("iW = " + gv_MyGame.GameWidth + "; iH = " + gv_MyGame.GameHeight);
	//alert("W = " + window.Width + "; H = " + window.Height);
	
	/*alert("sr = " + window.devicePixelRatio + "; iW = " + window.innerWidth + ", iH = " + window.innerHeight +
	      "; sW = " + screen.width + ", sH = " + screen.height +
		  "; cW = " + document.body.clientWidth + ", cH = " + document.body.clientHeight);*/
	
	
	
	// gv_scaleRatio = window.devicePixelRatio / 3;

	var gv_scaleRatio_1 = gv_MyGame.GameWidth/gv_StandartGameWidth;// 700 - ������ �� ���������
	var gv_scaleRatio_2 = gv_MyGame.GameHeight/gv_StandartGameHeight;// 500 - ������ �� ���������
	
	// //if((gv_MyGame.GameWidth < gv_StandartGameWidth) || (gv_MyGame.GameHeight < gv_StandartGameHeight))
	
	if(gv_scaleRatio_2 < gv_scaleRatio_1)
	  gv_scaleRatio = gv_scaleRatio_2;
	else
	  gv_scaleRatio = gv_scaleRatio_1;
	
	//if(gv_MyGame.GameWidth )
	
	if(gv_scaleRatio >= 1)
	  gv_scaleRatio = 1;

	//gv_MyGame.GameWidth = gv_StandartGameWidth;// * gv_scaleRatio;
	//gv_MyGame.GameHeight = gv_StandartGameHeight;// * gv_scaleRatio;
	  

	
    //this.chibi.scale.setTo(((GAME_WIDTH/BASE_WIDTH)*BASE_CHIBI_WIDTH)/BASE_CHIBI_WIDTH, ((GAME_HEIGHT/BASE_HEIGHT)*BASE_CHIBI_HEIGHT)/BASE_CHIBI_HEIGHT);
	
	//gv_scaleRatio = ((window.innerHeight/gv_StandartGameHeight)*gv_StandartGameHeight)/gv_StandartGameHeight;
	
	  //gv_MyGame.GameWidth = gv_StandartGameWidth;
	  //gv_MyGame.GameHeight = gv_StandartGameHeight;
	  //gv_scaleRatio = 1;
	
	gv_MyGame.GameWidth = gv_StandartGameWidth * gv_scaleRatio;
	gv_MyGame.GameHeight = gv_StandartGameHeight * gv_scaleRatio;
	
	  
}









