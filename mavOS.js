
//gv_THIS = this;
gv_GLOBAL_mavOS_THIS = null;
gc_ImageWidth = 640;
gc_ImageHeight = 480;


//-------------------------------------------------------------------------------------------------------------------
gv_MyGame.mavOS = function(fp_Game)
{
	//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// this.scale.pageAlignHorizontally = true;
	// this.scale.pageAlignVertically = true;
	
	
	
};
//-------------------------------------------------------------------------------------------------------------------
gv_MyGame.mavOS.prototype = {
	
	
	//- ********************************************************************************************************* -
    init: function()
	{
	
	
	    var lv_Device = this.game.device;
	
        //this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.pageAlignHorisontally = true;
        //this.scale.pageAlignVertically = true;
        //this.scale.forcePortrait = true;
		
    },
	//- ********************************************************************************************************* -
	preload: function()
	{
      
	  this.game.stage.backgroundColor = '#ccddff';
	  //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	  //this.scale.pageAlignHorizontally = true;
	  //this.scale.pageAlignVertically = true;
	  
      this.load.image('wallpaper', ('wallpaper.png') );
      this.load.image('bottomStrip', ('bottomStrip_opacity1.png') );
	  this.load.image('logo', ('logo.png') );
	  this.load.image('folder', ('folder.png') );
	  this.load.image('text_PuzzlesOfZack', ('text_PuzzlesOfZack.png') );
	  this.load.image('text_PuzzlesOfCody', ('text_PuzzlesOfCody.png') );
	  this.load.image('text_TheSuiteLifeOfZackAndCody', ('text_TheSuiteLifeOfZackAndCody.png') );
	  this.load.image('text_TheSuiteLifeOnDeck', ('text_TheSuiteLifeOnDeck.png') );
	  this.load.image('text_TheSuiteLifeMovie', ('text_TheSuiteLifeMovie.png') );
	  this.load.image('text_ToGameCommunity', ('text_ToGameCommunity.png') );
	  this.load.image('Window_640x480_opacity2', ('Window_640x480_opacity2.png') );
	  this.load.image('Window_800x529_opacity2', ('Window_800x529_opacity2.png') );
	  this.load.image('Window_303x194_opacity1', ('Window_303x194_opacity1.png') );
	  this.load.image('bnClose', ('bnClose.png') );
	  this.load.image('arrow_up', ('arrow_up.png') );
	  this.load.image('arrow_left', ('arrow_left.png') );
	  this.load.image('arrow_right', ('arrow_right.png') );
	  this.load.image('bnInfo', ('bnInfo.png') );
	  this.load.image('text_Info', ('text_Info.png') );
	  this.load.image('MesWin_WatchTheNewsInCommunity', ('MesWin_WatchTheNewsInCommunity.png') );
	  this.load.image('text_LevelComplete', ('text_LevelComplete.png') );
	  this.load.image('bnOk', ('bnOk.png') );
	  this.load.image('bnRestartLevel', ('bnRestartLevel.png') );
	  this.load.image('bnEasy', ('bnEasy.png') );
	  this.load.image('bnHard', ('bnHard.png') );
	  this.load.image('bnMinimize', ('bnMinimize.png') );
	  //
	  // Zack Puzzles
	  this.load.image('00_0', ('Zack_00.png') );
	  this.load.image('00_1', ('Zack_01.png') );
	  this.load.image('00_2', ('Zack_02.png') );
	  //
	  this.load.image('01_0', ('Zack_10.jpg') );
	  this.load.image('01_1', ('Zack_11.jpg') );
	  this.load.image('01_2', ('Zack_12.jpg') );
	  //
	  this.load.image('02_0', ('Zack_20.jpg') );
	  this.load.image('02_1', ('Zack_21.jpg') );
	  this.load.image('02_2', ('Zack_22.jpg') );
	  //
	  // Cody Puzzles
	  this.load.image('10_0', ('Cody_00.png') );
	  this.load.image('10_1', ('Cody_01.png') );
	  this.load.image('10_2', ('Cody_02.png') );
	  //
	  this.load.image('11_0', ('Cody_10.jpg') );
	  this.load.image('11_1', ('Cody_11.jpg') );
	  this.load.image('11_2', ('Cody_12.jpg') );
	  //
	  this.load.image('12_0', ('Cody_20.jpg') );
	  this.load.image('12_1', ('Cody_21.jpg') );
	  this.load.image('12_2', ('Cody_22.jpg') );
	  
	  

	  
	},
	//- ********************************************************************************************************* -
	create: function()
	{
      var lv_rect;
      //this.WholeImage = this.add.image(100, 100, 'wallpaper');
	  m_DefineGameSizeAndScale();
	  gv_MyGame.game.scale.setGameSize(gv_MyGame.GameWidth, gv_MyGame.GameHeight);
	  
	  gv_GLOBAL_mavOS_THIS = this;
	  this.mavOS = new mavOS(this);
	  
	  var lv_TileWidth = 160;
	  var lv_TileHeight = 160;
	  //
	  this.ZackPuzzle = new ZackPuzzle(this, this.mavOS.window_puzzleWindow, lv_TileWidth, lv_TileHeight);
	  gv_GLOBAL_ZACK_THIS = this;
	  //
	  this.CodyPuzzle = new CodyPuzzle(this, this.mavOS.window_puzzleWindow, lv_TileWidth, lv_TileHeight);
	  gv_GLOBAL_CODY_THIS = this;
	  
      //if(document.getElementById(id).style.display == "block")
      document.getElementById('id_Wait').style.display = "none";
	  
	},
	//- ********************************************************************************************************* -
    update: function()
	{
	
      this.mavOS.m_MesWinDisappearing();
	  
	  if(gv_GLOBAL_mavOS_THIS.mavOS.window_puzzleWindow.group.visible)
	  if(!gv_LevelComplete)
	  {
	    if(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType === 0)
		{
		  if(gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_LevelComlete())
	      {
	        gv_LevelComplete = 1;
	        gv_GLOBAL_mavOS_THIS.mavOS.window_LevelComplete.group.visible = true;
	      }
	    }
		else
		  m_Update_CodyPuzzle();
	  }
	  
	  
	
	}
	//- ********************************************************************************************************* -

	
};
//-------------------------------------------------------------------------------------------------------------------
function m_Update_CodyPuzzle()
{
	  var lv_dX, lv_dY, lv_k;
	  var lv_dHit = 20 * gv_scaleRatio * gv_cScaleRatio;
	  var lv_CurTile;
	  var lv_NTile;// Neighbour Tile
	  var lv_NullCounter = 0;
	  
	  for(lv_k = 0; lv_k < gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles.length; lv_k++)
	  {
	    lv_CurTile = gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles[lv_k];
		
		if(lv_CurTile.neighbourCounter === 0)
		  lv_NullCounter++;
		
		
		if(lv_CurTile.group.MouseDragTile)
		{
		  lv_dX = lv_CurTile.group.mP.x - lv_CurTile.group.mX;//this.game.input.x
          lv_dY = lv_CurTile.group.mP.y - lv_CurTile.group.mY;
          lv_CurTile.group.position.x += lv_dX;
          lv_CurTile.group.position.y += lv_dY;
          lv_CurTile.group.mX = lv_CurTile.group.mP.x;
          lv_CurTile.group.mY = lv_CurTile.group.mP.y;
		  }
		  if(lv_CurTile.neighbour.left !== -1)
		  if(lv_CurTile.cf_neighbour.left === 0)
		  {
		    lv_NTile = gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles[ lv_CurTile.neighbour.left ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.left_x * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.right_x * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.left_x * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.right_x * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.left_y * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.right_y * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.left_y * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.right_y * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   )
			  )
			{
			  lv_CurTile.cf_neighbour.left = lv_NTile;
			  lv_NTile.cf_neighbour.right = lv_CurTile;
			  lv_CurTile.neighbourCounter--;
			  lv_NTile.neighbourCounter--;
			}
		  }
		  
		  if(lv_CurTile.neighbour.right !== -1)
		  if(lv_CurTile.cf_neighbour.right === 0)
		  {
		    lv_NTile = gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles[ lv_CurTile.neighbour.right ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.right_x * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.left_x * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.right_x * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.left_x * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.right_y * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.left_y * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.right_y * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.left_y * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   )
			  )
			{
			  lv_CurTile.cf_neighbour.right = lv_NTile;
			  lv_NTile.cf_neighbour.left = lv_CurTile;
			  lv_CurTile.neighbourCounter--;
			  lv_NTile.neighbourCounter--;
		    }

		  }
		  
		  if(lv_CurTile.neighbour.top !== -1)
		  if(lv_CurTile.cf_neighbour.top === 0)
		  {
		    lv_NTile = gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles[ lv_CurTile.neighbour.top ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.top_x * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.bottom_x * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.top_x * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.bottom_x * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.top_y * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.bottom_y * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.top_y * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.bottom_y * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   )
			  )
			{
			  lv_CurTile.cf_neighbour.top = lv_NTile;
			  lv_NTile.cf_neighbour.bottom = lv_CurTile;
			  lv_CurTile.neighbourCounter--;
			  lv_NTile.neighbourCounter--;
			}
		  }
		  
		  if(lv_CurTile.neighbour.bottom !== -1)
		  if(lv_CurTile.cf_neighbour.bottom === 0)
		  {
		    lv_NTile = gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles[ lv_CurTile.neighbour.bottom ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.bottom_x * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.top_x * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.bottom_x * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.top_x * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.bottom_y * gv_scaleRatio * gv_cScaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.top_y * gv_scaleRatio * gv_cScaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.bottom_y * gv_scaleRatio * gv_cScaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.top_y * gv_scaleRatio * gv_cScaleRatio - lv_dHit)   )
			  )
			{
			  lv_CurTile.cf_neighbour.bottom = lv_NTile;
			  lv_NTile.cf_neighbour.top = lv_CurTile;
			  lv_CurTile.neighbourCounter--;
			  lv_NTile.neighbourCounter--;
			}
		  }
		if(lv_CurTile.group.MouseDragTile)
		  lv_CurTile.m_Drag();
		//}//if(lv_CurTile.group.MouseDragTile)
	  
	  
	  }
	  
	  if(lv_NullCounter === gv_GLOBAL_CODY_THIS.CodyPuzzle.Tiles.length)
	  {
	    gv_LevelComplete = 1;
		gv_GLOBAL_mavOS_THIS.mavOS.window_LevelComplete.group.visible = true;
	  }
	  

}
//-------------------------------------------------------------------------------------------------------------------
function mavOS(fp_GameScene)
{

  //- ********************************************************************************************************* -
  this.m_onMouseDown_bnToGameCommunity = function(fp_Object, fp_Pointer)
  {
    //document.location.href = "https://vk.com/the_suite_life_universe";
	//window.open('https://vk.com/the_suite_life_universe', '_blank');
	//document.location.replace("https://vk.com/the_suite_life_universe");// в истории браузера не осталась запись о текущей странице
  }
  //- ********************************************************************************************************* -
  this.m_MesWinDisappearing = function()
  {
    if(this.MesWinDisappearing)
	if(this.MesWin_WatchTheNewsInCommunity.sprite.alpha > 0)
	{
	  this.MesWin_WatchTheNewsInCommunity.sprite.alpha -= 0.01;
	  if(this.MesWin_WatchTheNewsInCommunity.sprite.alpha <= 0)
	  {
	    this.MesWinDisappearing = false;
		this.MesWin_WatchTheNewsInCommunity.sprite.alpha = 0;
		
		//this.MesWin_WatchTheNewsInCommunity.sprite.destroy();
		//this.MesWin_WatchTheNewsInCommunity.sprite = null;
		//this.MesWin_WatchTheNewsInCommunity = null;
	  }
	}
  }
  gv_Timer = 0;
  //- ********************************************************************************************************* -
  this.m_onMouseDown_logo = function(fp_Object, fp_Pointer)
  {
	if(gv_Timer)
	  return;
	
	gv_Timer = 1;
	
	setTimeout( function() {
	                          gv_Timer = 0;
							  gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_mavWindow();
	                       },
	
	                          50);
	
	//gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_mavWindow();
	
	
	
	
	//gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group.visible = !(gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group.visible);
  }
  //- ********************************************************************************************************* - m_ShowHide_mavWindow()
  this.m_ShowHide_mavWindow = function()
  {
    gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group.visible = !(gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group.visible);
	//if(gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow === null)
	/*if(gv_GLOBAL_mavOS_THIS.mavOS.mavWindow_visible === false)
	  gv_GLOBAL_mavOS_THIS.mavOS.m_Create_mavWindow(true);
	else
	  gv_GLOBAL_mavOS_THIS.mavOS.m_Destroy_mavWindow();*/
  }
  //- ********************************************************************************************************* - m_BlockMouseEvents_Desktop()
  this.m_BlockMouseEvents_Desktop = function(fp_Block)
  {
    fp_Block = !fp_Block;
	this.folder_PuzzlesOfZack.folderSprite.inputEnabled = fp_Block;
	this.folder_PuzzlesOfZack.textSprite.inputEnabled = fp_Block;
	this.folder_PuzzlesOfCody.folderSprite.inputEnabled = fp_Block;
	this.folder_PuzzlesOfCody.textSprite.inputEnabled = fp_Block;
  }
  //- ********************************************************************************************************* - m_ShowHide_window_FM()
  this.m_ShowHide_window_FM = function(fp_Show, fp_PuzzleType)
  {
    gv_GLOBAL_mavOS_THIS.mavOS.m_BlockMouseEvents_Desktop(fp_Show);
	
	if(fp_Show === false)
	{
	  gv_GLOBAL_mavOS_THIS.mavOS.window_FM.group.visible = false;
	  
	//gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.alpha = 0.1;
	//gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.inputEnabled = false;
	  return;
	}
	
	this.MesWinDisappearing = true;
	
	var lv_OtherPuzzleType = (fp_PuzzleType === 0)? 1 : 0;
	
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.group.visible = true;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType = fp_PuzzleType;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.caption[fp_PuzzleType].group.visible = true;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.caption[lv_OtherPuzzleType].group.visible = false;
	
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.alpha = 0.1;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.inputEnabled = true;
	
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnPrevImage.group.visible = false;
    gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnNextImage.group.visible = false;
	
	
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM_folders(true);
	
    
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_FM_bnClose()
  this.m_onMouseDown_window_FM_bnClose = function(fp_Object, fp_Pointer)
  {
    gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM(false, gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType);
  
  }
  //- ********************************************************************************************************* -
  this.m_onMouseDown_window_FM_imageCanvas = function(fp_Object, fp_Pointer)
  {
    document.getElementById('id_Wait').style.display = "block";
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_puzzleWindow(false);
	gv_LevelComplete = 0;
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM(false, gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType);
    
	if(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType === 0)
	  gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_CreatePuzzle(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType + '' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curFolder + '_' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder);
	else
	  gv_GLOBAL_CODY_THIS.CodyPuzzle.m_CreatePuzzle(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType + '' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curFolder + '_' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder);
	
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_puzzleWindow(true);
	document.getElementById('id_Wait').style.display = "none";
  }
  //- ********************************************************************************************************* - m_onMouseDown_folder_PuzzlesOfZack()
  this.m_onMouseDown_folder_PuzzlesOfZack = function(fp_Object, fp_Pointer)
  {
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM(true, 0);
    
  }
  //- ********************************************************************************************************* - m_onMouseDown_folder_PuzzlesOfCody()
  this.m_onMouseDown_folder_PuzzlesOfCody = function(fp_Object, fp_Pointer)
  {
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM(true, 1);
    
  }
  //- ********************************************************************************************************* -
  this.m_onMouseDown_window_FM_folder = function(fp_Object, fp_Pointer)
  {
	var lv_rect;
	
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curFolder = fp_Object.parent.num;
	
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM_folders(false);
	//gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.group.visible = true;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.alpha = 1;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.inputEnabled = true;
	
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder = 0;
	lv_rect = new Phaser.Rectangle(0, 0, gc_ImageWidth, gc_ImageHeight);
    gv_GLOBAL_mavOS_THIS.mavOS.window_FM.imageCanvas.bmp.copyRect(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType + '' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curFolder + '_' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder,
                                        	                      lv_rect, 0, 0);
	
  }
  //- ********************************************************************************************************* -
  this.m_onMouseDown_window_FM_bnUp = function(fp_Object, fp_Pointer)
  {

    gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_FM_folders(true);
    //gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.group.visible = false;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.alpha = 0.1;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnUp.sprite.inputEnabled = false;
  
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_FM_bnPrevImage()
  this.m_onMouseDown_window_FM_bnPrevImage = function(fp_Object, fp_Pointer)
  {
    var lv_rect;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder--;
	if(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder < 0)
	  gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder = gv_GLOBAL_mavOS_THIS.mavOS.window_FM.maxImageInFolder - 1;
    lv_rect = new Phaser.Rectangle(0, 0, gc_ImageWidth, gc_ImageHeight);
    gv_GLOBAL_mavOS_THIS.mavOS.window_FM.imageCanvas.bmp.copyRect(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType + '' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curFolder + '_' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder,
                                        	                      lv_rect, 0, 0);
	
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_FM_bnNextImage()
  this.m_onMouseDown_window_FM_bnNextImage = function(fp_Object, fp_Pointer)
  {
    var lv_rect;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder++;
	if(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder === gv_GLOBAL_mavOS_THIS.mavOS.window_FM.maxImageInFolder)
	  gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder = 0;
    lv_rect = new Phaser.Rectangle(0, 0, gc_ImageWidth, gc_ImageHeight);
    gv_GLOBAL_mavOS_THIS.mavOS.window_FM.imageCanvas.bmp.copyRect(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType + '' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curFolder + '_' + gv_GLOBAL_mavOS_THIS.mavOS.window_FM.curImageInFolder,
                                        	                      lv_rect, 0, 0);
  }
  //- ********************************************************************************************************* - m_ShowHide_window_FM_folders()
  this.m_ShowHide_window_FM_folders = function(fp_Show)
  {
	var lv_i;
	for(lv_i = 0; lv_i < gv_GLOBAL_mavOS_THIS.mavOS.window_FM.folders.length; lv_i++)
      gv_GLOBAL_mavOS_THIS.mavOS.window_FM.folders[lv_i].group.visible = fp_Show;
	  
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnPrevImage.group.visible = !fp_Show;
    gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnNextImage.group.visible = !fp_Show;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.imageCanvas.group.visible = !fp_Show;
	
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnPrevImage.sprite.inputEnabled = !fp_Show;
	gv_GLOBAL_mavOS_THIS.mavOS.window_FM.bnNextImage.sprite.inputEnabled = !fp_Show;
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_puzzleWindow_bnClose()
  this.m_onMouseDown_window_puzzleWindow_bnClose = function(fp_Object, fp_Pointer)
  {
    gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_puzzleWindow(false);
  }
  //- ********************************************************************************************************* - m_ShowHide_window_puzzleWindow()
  this.m_ShowHide_window_puzzleWindow = function(fp_Show)
  {
    gv_GLOBAL_mavOS_THIS.mavOS.m_BlockMouseEvents_Desktop(fp_Show);
	
	if(fp_Show === false)
	{
      if(gv_GLOBAL_mavOS_THIS.mavOS.window_FM.puzzleType === 0)
	    gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_HideTiles();
	  else
	    gv_GLOBAL_CODY_THIS.CodyPuzzle.m_HideTiles();
	  gv_GLOBAL_mavOS_THIS.mavOS.window_puzzleWindow.group.visible = false;
	  return;
	}
	
    gv_GLOBAL_mavOS_THIS.mavOS.window_puzzleWindow.group.visible = true;
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_LevelComplete_bnOk()
  this.m_onMouseDown_window_LevelComplete_bnOk = function(fp_Object, fp_Pointer)
  {
	gv_GLOBAL_mavOS_THIS.mavOS.window_LevelComplete.group.visible = false;
	gv_GLOBAL_mavOS_THIS.mavOS.m_ShowHide_window_puzzleWindow(false);
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_LevelComplete_bnRestartLevel()
  this.m_onMouseDown_window_LevelComplete_bnRestartLevel = function(fp_Object, fp_Pointer)
  {
    gv_GLOBAL_mavOS_THIS.mavOS.window_LevelComplete.group.visible = false;
	gv_GLOBAL_mavOS_THIS.mavOS.m_onMouseDown_window_FM_imageCanvas();
  }
  //- ********************************************************************************************************* - m_onMouseDown_window_SIWindow_bnMinimize()
  /*this.m_onMouseDown_window_SIWindow_bnMinimize = function(fp_Object, fp_Pointer)
  {
    gv_GLOBAL_mavOS_THIS.mavOS.window_SIWindow.group.visible = false;
  }*/
  //- ********************************************************************************************************* - m_Create_puzzleWindow()
  this.m_Create_puzzleWindow = function(fp_Visible)
  {
    var lv_rect;
	var lc_wwindow_puzzleWindow, lc_hwindow_puzzleWindow;
	var lc_xwindow_puzzleWindow, lc_ywindow_puzzleWindow;
	var lc_wwindowMask, lc_hwindowMask;
	var lc_xwindowMask, lc_ywindowMask;
	var lc_wbnClose, lc_hbnClose;
	var lc_dxybnClose;
	
	
    lc_wwindow_puzzleWindow = this.GameScene.cache.getImage('Window_800x529_opacity2').width;
    lc_hwindow_puzzleWindow = this.GameScene.cache.getImage('Window_800x529_opacity2').height;
    lc_xwindow_puzzleWindow = 0;
    lc_ywindow_puzzleWindow = 0;
	
    lc_wbnClose = this.GameScene.cache.getImage('bnClose').width;
    lc_hbnClose = this.GameScene.cache.getImage('bnClose').height;
    lc_dxybnClose = 10;

	
    this.window_puzzleWindow = {
					            group: undefined,
                                windowBmp: undefined,
			                    windowSprite: undefined,
							    windowMask: undefined,
								
					            bnClose: {
                                          bmp: undefined,
			                              group: undefined,
			                              sprite: undefined
					                     }
										 
                               };
		
    lc_xwindowMask = 5 * gv_scaleRatio;
    lc_ywindowMask = (lc_dxybnClose + lc_hbnClose + lc_xwindowMask) * gv_scaleRatio;		
    lc_wwindowMask = (lc_wwindow_puzzleWindow * gv_scaleRatio - 2*lc_xwindowMask);
    lc_hwindowMask = lc_hwindow_puzzleWindow * gv_scaleRatio - lc_ywindowMask - lc_xwindowMask;
	//
	gv_cScaleRatio = lc_hwindowMask/(gc_ImageHeight * gv_scaleRatio + 400 * gv_scaleRatio);
	gv_CodyPuzzle_iX = 2*lc_xwindowMask;
	gv_CodyPuzzle_iY = lc_ywindowMask + lc_xwindowMask;
	//
    this.window_puzzleWindow.windowMask = this.GameScene.add.graphics(0, 0);
    this.window_puzzleWindow.windowMask.beginFill(0xffffff);
	this.window_puzzleWindow.windowMask.drawRect(lc_xwindowMask, lc_ywindowMask, lc_wwindowMask, lc_hwindowMask);
	this.window_puzzleWindow.windowMask.endFill();
	this.window_puzzleWindow.windowMask.visible = false;
	
							   
    // window_puzzleWindow: window
    this.window_puzzleWindow.windowBmp = this.GameScene.make.bitmapData(lc_wwindow_puzzleWindow, lc_hwindow_puzzleWindow);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wwindow_puzzleWindow, lc_hwindow_puzzleWindow);
    this.window_puzzleWindow.windowBmp.copyRect('Window_800x529_opacity2', lv_rect, 0, 0);
    this.window_puzzleWindow.windowSprite = this.GameScene.add.sprite(0, 0, this.window_puzzleWindow.windowBmp);
							   
    // window_puzzleWindow: bnClose
    this.window_puzzleWindow.bnClose.bmp = this.GameScene.make.bitmapData(lc_wbnClose, lc_hbnClose);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnClose, lc_hbnClose);
    this.window_puzzleWindow.bnClose.bmp.copyRect('bnClose', lv_rect, 0, 0);
    this.window_puzzleWindow.bnClose.sprite = this.GameScene.add.sprite(0, 0, this.window_puzzleWindow.bnClose.bmp);
    this.window_puzzleWindow.bnClose.group = this.GameScene.game.add.group();
    this.window_puzzleWindow.bnClose.group.add(this.window_puzzleWindow.bnClose.sprite);
    this.window_puzzleWindow.bnClose.group.position.x = (lc_wwindow_puzzleWindow - lc_wbnClose - lc_dxybnClose) * gv_scaleRatio;
    this.window_puzzleWindow.bnClose.group.position.y = lc_dxybnClose * gv_scaleRatio;
    //
    this.window_puzzleWindow.group = this.GameScene.game.add.group();
    this.window_puzzleWindow.group.add(this.window_puzzleWindow.windowSprite);
    this.window_puzzleWindow.group.add(this.window_puzzleWindow.bnClose.group);
    this.window_puzzleWindow.group.add(this.window_puzzleWindow.windowMask);
    this.window_puzzleWindow.group.position.x = lc_xwindow_puzzleWindow;
    this.window_puzzleWindow.group.position.y = lc_ywindow_puzzleWindow;
    this.window_puzzleWindow.group.visible = fp_Visible;
	
    this.window_puzzleWindow.bnClose.sprite.inputEnabled = true;
    this.window_puzzleWindow.bnClose.group.onChildInputDown.add(this.m_onMouseDown_window_puzzleWindow_bnClose, this.window_puzzleWindow.bnClose.group);
	
	//this.window_puzzleWindow.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	this.window_puzzleWindow.windowSprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	this.window_puzzleWindow.bnClose.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
  }
  //- ********************************************************************************************************* - m_Create_SIWindow()
  this.m_Create_SIWindow = function(fp_Visible)
  {
    var lv_rect;
	var lc_wwindow_SIWindow, lc_hwindow_SIWindow;
	var lc_xwindow_SIWindow, lc_ywindow_SIWindow;
	//var lc_wbnMinimize, lc_hbnMinimize;
	//var lc_dxybnMinimize;
	var lc_sxyimageCanvas;
	var lc_ximageCanvas, lc_yimageCanvas;
	
    lc_wwindow_SIWindow = this.GameScene.cache.getImage('Window_800x529_opacity2').width;
    lc_hwindow_SIWindow = this.GameScene.cache.getImage('Window_800x529_opacity2').height;
    lc_xwindow_SIWindow = 0;
    lc_ywindow_SIWindow = 0;
	
    //lc_wbnMinimize = this.GameScene.cache.getImage('bnMinimize').width;
    //lc_hbnMinimize = this.GameScene.cache.getImage('bnMinimize').height;
    //lc_dxybnMinimize = 10;
	
	lc_sxyimageCanvas = 0.8;
	lc_ximageCanvas = lc_wwindow_SIWindow/2 - (gc_ImageWidth * lc_sxyimageCanvas)/2;
	lc_yimageCanvas = 65;

	
    this.window_SIWindow = {
					        group: undefined,
                            windowBmp: undefined,
			                windowSprite: undefined,
					
					        imageCanvas: {
                                          bmp: undefined,
			                              group: undefined,
			                              sprite: undefined
					                     }
					
					        /*bnMinimize: {
                                      bmp: undefined,
			                          group: undefined,
			                          sprite: undefined
					                 }*/
                               };
							   
							   
							   
    // window_puzzleWindow: window
    this.window_SIWindow.windowBmp = this.GameScene.make.bitmapData(lc_wwindow_SIWindow, lc_hwindow_SIWindow);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wwindow_SIWindow, lc_hwindow_SIWindow);
    this.window_SIWindow.windowBmp.copyRect('Window_800x529_opacity2', lv_rect, 0, 0);
    this.window_SIWindow.windowSprite = this.GameScene.add.sprite(0, 0, this.window_SIWindow.windowBmp);
	//		   
    // window_SIWindow: bnMinimize
    /*this.window_SIWindow.bnMinimize.bmp = this.GameScene.make.bitmapData(lc_wbnMinimize, lc_hbnMinimize);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnMinimize, lc_hbnMinimize);
    this.window_SIWindow.bnMinimize.bmp.copyRect('bnMinimize', lv_rect, 0, 0);
    this.window_SIWindow.bnMinimize.sprite = this.GameScene.add.sprite(0, 0, this.window_SIWindow.bnMinimize.bmp);
    this.window_SIWindow.bnMinimize.group = this.GameScene.game.add.group();
    this.window_SIWindow.bnMinimize.group.add(this.window_SIWindow.bnMinimize.sprite);
    this.window_SIWindow.bnMinimize.group.position.x = lc_wwindow_SIWindow - lc_wbnMinimize - 2*lc_dxybnMinimize - this.GameScene.cache.getImage('bnClose').width;
    this.window_SIWindow.bnMinimize.group.position.y = lc_dxybnMinimize;*/
    //
    // window_SIWindow: imageCanvas
    this.window_SIWindow.imageCanvas.bmp = this.GameScene.make.bitmapData(gc_ImageWidth, gc_ImageHeight);
    lv_rect = new Phaser.Rectangle(0, 0, gc_ImageWidth, gc_ImageHeight);
    this.window_SIWindow.imageCanvas.bmp.copyRect('00_0', lv_rect, 0, 0);
    this.window_SIWindow.imageCanvas.sprite = this.GameScene.add.sprite(0, 0, this.window_SIWindow.imageCanvas.bmp);
    this.window_SIWindow.imageCanvas.group = this.GameScene.game.add.group();
    this.window_SIWindow.imageCanvas.group.add(this.window_SIWindow.imageCanvas.sprite);
    this.window_SIWindow.imageCanvas.group.position.x = lc_ximageCanvas;
    this.window_SIWindow.imageCanvas.group.position.y = lc_yimageCanvas;
	this.window_SIWindow.imageCanvas.sprite.scale.setTo(lc_sxyimageCanvas, lc_sxyimageCanvas);
	//
	//
    this.window_SIWindow.group = this.GameScene.game.add.group();
    this.window_SIWindow.group.add(this.window_SIWindow.windowSprite);
    this.window_SIWindow.group.add(this.window_SIWindow.imageCanvas.group);
    //this.window_SIWindow.group.add(this.window_SIWindow.bnMinimize.group);
    this.window_SIWindow.group.position.x = lc_xwindow_SIWindow;
    this.window_SIWindow.group.position.y = lc_ywindow_SIWindow;
    this.window_SIWindow.group.visible = fp_Visible;
	
    //this.window_SIWindow.bnMinimize.sprite.inputEnabled = true;
    //this.window_SIWindow.bnMinimize.group.onChildInputDown.add(this.m_onMouseDown_window_SIWindow_bnMinimize, this.window_SIWindow.bnMinimize.group);
	
  }
  //- ********************************************************************************************************* - m_Create_mavWindow()
  this.m_Create_mavWindow = function(fp_Visible)
  {
	var lv_rect;
	var lc_hwindow_mavWindow;
	var lc_xwindow_mavWindow, lc_ywindow_mavWindow;
	var lc_hbottomStrip;
	var lc_xbnInfo, lc_ybnInfo;
    var lc_xtext_Info, lc_ytext_Info;

    lc_xbnInfo = 4 * gv_scaleRatio;
    lc_ybnInfo = 10 * gv_scaleRatio;
    //
	lc_xtext_Info = this.GameScene.cache.getImage('bnInfo').width;//1D!
    lc_xtext_Info = this.GameScene.cache.getImage('bnInfo').width + 4 * gv_scaleRatio;
    lc_ytext_Info = 12 * gv_scaleRatio;
	
	lc_hbottomStrip = this.GameScene.cache.getImage('bottomStrip').height * gv_scaleRatio;
    lc_hwindow_mavWindow = this.GameScene.cache.getImage('Window_640x480_opacity2').height * gv_scaleRatio;
    lc_xwindow_mavWindow = 1 * gv_scaleRatio;
    lc_ywindow_mavWindow = gv_MyGame.GameHeight - lc_hbottomStrip - lc_hwindow_mavWindow - 4 * gv_scaleRatio;
    this.window_mavWindow = {
					         group: undefined,
			                 windowSprite: undefined,
					
					         bnInfo: {
			                          sprite: undefined
					                 },
					         text_Info: {
			                             sprite: undefined
					                    }
                            };
							
    // window_mavWindow: window
    this.window_mavWindow.windowSprite = this.GameScene.add.sprite(0, 0, 'Window_640x480_opacity2');
    //
    // window_mavWindow: bnInfo
    this.window_mavWindow.bnInfo.sprite = this.GameScene.add.sprite(0, 0, 'bnInfo');
    this.window_mavWindow.bnInfo.group = this.GameScene.game.add.group();
    this.window_mavWindow.bnInfo.group.add(this.window_mavWindow.bnInfo.sprite);
    this.window_mavWindow.bnInfo.group.position.x = lc_xbnInfo;
    this.window_mavWindow.bnInfo.group.position.y = lc_ybnInfo;
    //
    this.window_mavWindow.text_Info.sprite = this.GameScene.add.sprite(0, 0, 'text_Info');
    this.window_mavWindow.text_Info.sprite.position.x = lc_xtext_Info;
    this.window_mavWindow.text_Info.sprite.position.y = lc_ytext_Info;
    //
    this.window_mavWindow.group = this.GameScene.game.add.group();
    this.window_mavWindow.group.add(this.window_mavWindow.windowSprite);
    this.window_mavWindow.group.add(this.window_mavWindow.bnInfo.group);
    this.window_mavWindow.group.add(this.window_mavWindow.text_Info.sprite);
    this.window_mavWindow.group.position.x = lc_xwindow_mavWindow;
    this.window_mavWindow.group.position.y = lc_ywindow_mavWindow;
    this.window_mavWindow.group.visible = fp_Visible;
	
	//gv_GLOBAL_mavOS_THIS.mavOS.mavWindow_visible = true;
    //this.window_mavWindow.bnInfo.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
    this.window_mavWindow.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
  }
  //- ********************************************************************************************************* - m_Destroy_mavWindow() - не работает: память не освобождается
  this.m_Destroy_mavWindow = function()
  {
	  //gv_GLOBAL_mavOS_THIS.mavOS.mavWindow_visible = false;
	  
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.windowSprite.destroy();
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.windowBmp = null;
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.windowSprite = null;
	  //delete gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.windowSprite;
	  
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.sprite.destroy();
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.bmp = null;
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.sprite = null;
	  //delete gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.sprite;
	  
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.text_Info.sprite.destroy();
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.text_Info.bmp = null;
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.text_Info.sprite = null;
	  //delete gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.text_Info.sprite;
	  
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.group.destroy(true, false);
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.group = null;
	  //delete gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.bnInfo.group;
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group.destroy(true, false);
	  gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group.destroy();
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow.group = null;
	  
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow = null;
	  //delete gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow;
	  //gv_GLOBAL_mavOS_THIS.mavOS.window_mavWindow = null;
  
  }
  //- ********************************************************************************************************* - m_Create_wallpaper()
  this.m_Create_wallpaper = function()
  {
	// wallpaper
    this.wallpaper = {
					  group: undefined,
					  sprite: undefined
                     };
										
    // wallpaper
    this.wallpaper.sprite = this.GameScene.add.sprite(0, 0, 'wallpaper');
    this.wallpaper.group = this.GameScene.game.add.group();
	
	
    this.wallpaper.group.add(this.wallpaper.sprite);
	
    this.wallpaper.group.position.x = 0;
    this.wallpaper.group.position.y = 0;
	
	//var lv_ratio;
	//this.wallpaper.group.scale.setTo(gv_scaleRatio / window.devicePixelRatio, gv_scaleRatio / window.devicePixelRatio);
	//this.wallpaper.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	//lv_ratio = window.devicePixelRatio / 3;
	//gv_scaleRatio = 0.6;
	//gv_scaleRatio = gv_scaleRatio - gv_scaleRatio/window.devicePixelRatio;
	//gv_scaleRatio = lv_ratio;
	//gv_scaleRatio = gv_scaleRatio - 1/3;
	//gv_scaleRatio = gv_scaleRatio - window.devicePixelRatio / 3;
	//this.wallpaper.sprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	//this.wallpaper.sprite.scale.setTo(  ((640/800)*800)/800, ((360/600)*600)/600  );
	//gv_scaleRatio = ((360/600)*600)/600;
	//this.wallpaper.sprite.scale.setTo(  ((640/800)*800)/800, ((360/600)*600)/600  );
	this.wallpaper.sprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	
  }
  //- ********************************************************************************************************* - m_Create_bottomStrip()
  this.m_Create_bottomStrip = function()
  {
    var lv_rect;
    var lc_hbottomStrip;
	
	// bottomStrip
    lc_hbottomStrip = this.GameScene.cache.getImage('bottomStrip').height * gv_scaleRatio;
    this.bottomStrip = {
					    group: undefined,
					    sprite: undefined
                       };
    
    // bottomStrip
    this.bottomStrip.sprite = this.GameScene.add.sprite(0, 0, 'bottomStrip');
    this.bottomStrip.group = this.GameScene.game.add.group();
    this.bottomStrip.group.add(this.bottomStrip.sprite);
    this.bottomStrip.group.position.x = 0;
    this.bottomStrip.group.position.y = gv_MyGame.GameHeight - lc_hbottomStrip;
    
    this.bottomStrip.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
  }
  //- ********************************************************************************************************* - m_Create_logo()
  this.m_Create_logo = function()
  {
	var lc_dxylogo, lc_hlogo;
	// logo	 
    lc_dxylogo = 4 * gv_scaleRatio;
    lc_hlogo = this.GameScene.cache.getImage('logo').height * gv_scaleRatio;
    this.logo = {
			     group: undefined,
			     sprite: undefined
                };
				
    // logo
    this.logo.sprite = this.GameScene.add.sprite(0, 0, 'logo');
    this.logo.group = this.GameScene.game.add.group();
    this.logo.group.add(this.logo.sprite);
    this.logo.group.position.x = lc_dxylogo;
    this.logo.group.position.y = gv_MyGame.GameHeight - lc_hlogo - lc_dxylogo;
    this.logo.sprite.inputEnabled = true;
    this.logo.group.onChildInputDown.add(this.m_onMouseDown_logo, this.logo.group);
				
	this.logo.sprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);
  }
  //- ********************************************************************************************************* - m_Create_text_ToGameCommunity()
  this.m_Create_text_ToGameCommunity = function()
  {
	var lv_rect;
	var lc_wtext_ToGameCommunity, lc_htext_ToGameCommunity;
	var lc_dxtext_ToGameCommunity;

	// text 'ToGameCommunity'
	lc_dxtext_ToGameCommunity = 4;
    lc_wtext_ToGameCommunity = this.GameScene.cache.getImage('text_ToGameCommunity').width;
    lc_htext_ToGameCommunity = this.GameScene.cache.getImage('text_ToGameCommunity').height;
    this.text_ToGameCommunity = {
                                 bmp: undefined,
					             sprite: undefined
                                };
								
    // text_ToGameCommunity
    this.text_ToGameCommunity.bmp = this.GameScene.make.bitmapData(lc_wtext_ToGameCommunity, lc_htext_ToGameCommunity);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_ToGameCommunity, lc_htext_ToGameCommunity);
    this.text_ToGameCommunity.bmp.copyRect('text_ToGameCommunity', lv_rect, 0, 0);
    this.text_ToGameCommunity.sprite = this.GameScene.add.sprite(0, 0, this.text_ToGameCommunity.bmp);
    this.text_ToGameCommunity.group = this.GameScene.game.add.group();
    this.text_ToGameCommunity.group.add(this.text_ToGameCommunity.sprite);
    this.text_ToGameCommunity.group.position.x = gv_MyGame.GameWidth - lc_wtext_ToGameCommunity - lc_dxtext_ToGameCommunity;
    this.text_ToGameCommunity.group.position.y = gv_MyGame.GameHeight - lc_htext_ToGameCommunity;
    this.text_ToGameCommunity.sprite.inputEnabled = true;
    this.text_ToGameCommunity.group.onChildInputDown.add(this.m_onMouseDown_bnToGameCommunity, this.text_ToGameCommunity.group);
	this.text_ToGameCommunity.group.visible = false;
  }
  //- ********************************************************************************************************* - m_Create_MesWin_WatchTheNewsInCommunity()
  this.m_Create_MesWin_WatchTheNewsInCommunity = function()
  {
	var lc_wMesWin_WatchTheNewsInCommunity, lc_hMesWin_WatchTheNewsInCommunity;
	
    // MesWin_WatchTheNewsInCommunity	 
    lc_wMesWin_WatchTheNewsInCommunity = this.GameScene.cache.getImage('MesWin_WatchTheNewsInCommunity').width * gv_scaleRatio;
    lc_hMesWin_WatchTheNewsInCommunity = this.GameScene.cache.getImage('MesWin_WatchTheNewsInCommunity').height * gv_scaleRatio;
    this.MesWin_WatchTheNewsInCommunity = {
			                               sprite: undefined
                                          };
	
    // MesWin_WatchTheNewsInCommunity
	this.MesWin_WatchTheNewsInCommunity.sprite = this.GameScene.add.sprite(0, 0, 'MesWin_WatchTheNewsInCommunity');
	this.MesWin_WatchTheNewsInCommunity.sprite.position.x = gv_MyGame.GameWidth - lc_wMesWin_WatchTheNewsInCommunity - 4 * gv_scaleRatio;
	this.MesWin_WatchTheNewsInCommunity.sprite.position.y = this.bottomStrip.group.position.y - lc_hMesWin_WatchTheNewsInCommunity - 4 * gv_scaleRatio;
	
	this.MesWin_WatchTheNewsInCommunity.sprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);
  }
  //- ********************************************************************************************************* - m_Create_folder_PuzzlesOfZack()
  this.m_Create_folder_PuzzlesOfZack = function()
  {
	var lc_wfolder, lc_wfolder2, lc_hfolder, lc_dytext_folder;
	var lc_wtext_PuzzlesOfZack;
	var lc_xfolder_PuzzlesOfZack, lc_yfolder_PuzzlesOfZack;
	
	
    lc_wtext_PuzzlesOfZack = this.GameScene.cache.getImage('text_PuzzlesOfZack').width * gv_scaleRatio;
	
    // Folders
    lc_wfolder = this.GameScene.cache.getImage('folder').width * gv_scaleRatio;
    lc_wfolder2 = lc_wfolder/2;
    lc_hfolder = this.GameScene.cache.getImage('folder').height;// * gv_scaleRatio;
    lc_dytext_folder = 5 * gv_scaleRatio;
    //
    // folder 'PuzzlesOfZack'
    lc_xfolder_PuzzlesOfZack = 185 * gv_scaleRatio;//178
    lc_yfolder_PuzzlesOfZack = 185 * gv_scaleRatio;//126
    this.folder_PuzzlesOfZack = {
                                 group: undefined,
			                     folderSprite: undefined,
							     textSprite: undefined
                                };
	
    // folder_PuzzlesOfZack
    this.folder_PuzzlesOfZack.folderSprite = this.GameScene.add.sprite(0, 0, 'folder');
    //
    this.folder_PuzzlesOfZack.textSprite = this.GameScene.add.sprite(0, 0, 'text_PuzzlesOfZack');
    //
    this.folder_PuzzlesOfZack.group = this.GameScene.game.add.group();
    this.folder_PuzzlesOfZack.group.add(this.folder_PuzzlesOfZack.folderSprite);
    this.folder_PuzzlesOfZack.group.add(this.folder_PuzzlesOfZack.textSprite);
    this.folder_PuzzlesOfZack.group.position.x = lc_xfolder_PuzzlesOfZack;
    this.folder_PuzzlesOfZack.group.position.y = lc_yfolder_PuzzlesOfZack;
    this.folder_PuzzlesOfZack.textSprite.position.x = lc_wfolder2 - lc_wtext_PuzzlesOfZack/2;
    this.folder_PuzzlesOfZack.textSprite.position.y = lc_hfolder + lc_dytext_folder;
	
    this.folder_PuzzlesOfZack.folderSprite.inputEnabled = true;
	this.folder_PuzzlesOfZack.textSprite.inputEnabled = true;
    this.folder_PuzzlesOfZack.group.onChildInputDown.add(this.m_onMouseDown_folder_PuzzlesOfZack, this.folder_PuzzlesOfZack.group);
	
	this.folder_PuzzlesOfZack.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	
  }
  //- ********************************************************************************************************* - m_Create_folder_PuzzlesOfCody()
  this.m_Create_folder_PuzzlesOfCody = function()
  {
	var lv_rect;
	var lc_wfolder, lc_wfolder2, lc_hfolder, lc_dytext_folder;
	var lc_xfolder_PuzzlesOfCody, lc_yfolder_PuzzlesOfCody;
	var lc_wtext_PuzzlesOfCody;
	
	
    lc_wtext_PuzzlesOfCody = this.GameScene.cache.getImage('text_PuzzlesOfCody').width * gv_scaleRatio;
	
    // Folders
    lc_wfolder = this.GameScene.cache.getImage('folder').width * gv_scaleRatio;
    lc_wfolder2 = lc_wfolder/2;
    lc_hfolder = this.GameScene.cache.getImage('folder').height;
    lc_dytext_folder = 5 * gv_scaleRatio;
	
    // folder 'PuzzlesOfCody'
    lc_xfolder_PuzzlesOfCody = 495 * gv_scaleRatio;// 609
    lc_yfolder_PuzzlesOfCody = 130 * gv_scaleRatio;
    this.folder_PuzzlesOfCody = {
                                 group: undefined,
			                     folderSprite: undefined,
							     textSprite: undefined
                                };
	
    // folder_PuzzlesOfCody
    this.folder_PuzzlesOfCody.folderSprite = this.GameScene.add.sprite(0, 0, 'folder');
    //
    this.folder_PuzzlesOfCody.textSprite = this.GameScene.add.sprite(0, 0, 'text_PuzzlesOfCody');
    //
    this.folder_PuzzlesOfCody.group = this.GameScene.game.add.group();
    this.folder_PuzzlesOfCody.group.add(this.folder_PuzzlesOfCody.folderSprite);
    this.folder_PuzzlesOfCody.group.add(this.folder_PuzzlesOfCody.textSprite);
    this.folder_PuzzlesOfCody.group.position.x = lc_xfolder_PuzzlesOfCody;
    this.folder_PuzzlesOfCody.group.position.y = lc_yfolder_PuzzlesOfCody;
    this.folder_PuzzlesOfCody.textSprite.position.x = lc_wfolder2 - lc_wtext_PuzzlesOfCody/2;
    this.folder_PuzzlesOfCody.textSprite.position.y = lc_hfolder + lc_dytext_folder;
	
    this.folder_PuzzlesOfCody.folderSprite.inputEnabled = true;
	this.folder_PuzzlesOfCody.textSprite.inputEnabled = true;
    this.folder_PuzzlesOfCody.group.onChildInputDown.add(this.m_onMouseDown_folder_PuzzlesOfCody, this.folder_PuzzlesOfCody.group);
	
	this.folder_PuzzlesOfCody.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	
  }
  //- ********************************************************************************************************* - m_Create_window_FM()
  this.m_Create_window_FM = function(fp_Visible)
  {
	var lv_rect;
	var lc_wfolder, lc_wfolder2, lc_hfolder, lc_dytext_folder;
	var lc_xfolder_TheSuiteLifeOfZackAndCody, lc_yfolder_TheSuiteLifeOfZackAndCody;
	var lc_xfolder_TheSuiteLifeOnDeck, lc_yfolder_TheSuiteLifeOnDeck;
	var lc_xfolder_TheSuiteLifeMovie, lc_yfolder_TheSuiteLifeMovie;
	var lc_wwindow_FM, lc_hwindow_FM;
	var lc_xwindow_FM, lc_ywindow_FM;
	var lc_dyCaption;
	var lc_dxybnClose;
	var lc_wbnClose, lc_hbnClose;
	var lc_xFistTopArrow, lc_yFistTopArrow;
	var lc_wbnUp, lc_hbnUp;
	var lc_wtext_TheSuiteLifeOfZackAndCody, lc_htext_TheSuiteLifeOfZackAndCody;
	var lc_wtext_TheSuiteLifeOnDeck, lc_htext_TheSuiteLifeOnDeck;
	var lc_wtext_TheSuiteLifeMovie, lc_htext_TheSuiteLifeMovie;
	var lc_wtext_PuzzlesOfZack, lc_htext_PuzzlesOfZack;
	var lc_wtext_PuzzlesOfCody, lc_htext_PuzzlesOfCody;
	var lc_dxbnPrevArrow, lc_dybnPrevArrow;
	var lc_wbnPrevImage, lc_hbnPrevImage;
	var lc_wbnNextImage, lc_hbnNextImage;
	var lc_ximageCanvas, lc_yimageCanvas, lc_sxyimageCanvas;
	
	

	
	lc_wbnPrevImage = this.GameScene.cache.getImage('arrow_left').width;
	lc_hbnPrevImage = this.GameScene.cache.getImage('arrow_left').height;
	lc_wbnNextImage = this.GameScene.cache.getImage('arrow_left').width;
	lc_hbnNextImage = this.GameScene.cache.getImage('arrow_left').height;
	lc_dxbnPrevArrow = 20;
	lc_dybnPrevArrow = 10;
	
    lc_wtext_TheSuiteLifeOfZackAndCody = this.GameScene.cache.getImage('text_TheSuiteLifeOfZackAndCody').width;
    lc_htext_TheSuiteLifeOfZackAndCody = this.GameScene.cache.getImage('text_TheSuiteLifeOfZackAndCody').height;
	
    lc_wtext_TheSuiteLifeOnDeck = this.GameScene.cache.getImage('text_TheSuiteLifeOnDeck').width;
    lc_htext_TheSuiteLifeOnDeck = this.GameScene.cache.getImage('text_TheSuiteLifeOnDeck').height;
	
    lc_wtext_TheSuiteLifeMovie = this.GameScene.cache.getImage('text_TheSuiteLifeMovie').width;
    lc_htext_TheSuiteLifeMovie = this.GameScene.cache.getImage('text_TheSuiteLifeMovie').height;
	
    lc_wtext_PuzzlesOfZack = this.GameScene.cache.getImage('text_PuzzlesOfZack').width;
    lc_htext_PuzzlesOfZack = this.GameScene.cache.getImage('text_PuzzlesOfZack').height;
	
    lc_wtext_PuzzlesOfCody = this.GameScene.cache.getImage('text_PuzzlesOfCody').width;
    lc_htext_PuzzlesOfCody = this.GameScene.cache.getImage('text_PuzzlesOfCody').height;
	

    // window 'FileManager'
    //
    lc_dyCaption = 10;
    //
    lc_dxybnClose = 10;
    lc_wbnClose = this.GameScene.cache.getImage('bnClose').width;
    lc_hbnClose = this.GameScene.cache.getImage('bnClose').height;
    //
    lc_xFistTopArrow = 20;
    lc_yFistTopArrow = lc_dxybnClose;//20;
    lc_wbnUp = this.GameScene.cache.getImage('arrow_up').width;
    lc_hbnUp = this.GameScene.cache.getImage('arrow_up').height;
    //
    lc_wwindow_FM = this.GameScene.cache.getImage('Window_800x529_opacity2').width;
    lc_hwindow_FM = this.GameScene.cache.getImage('Window_800x529_opacity2').height;
    lc_xwindow_FM = 0;//gv_StandartGameWidth/2 - lc_wwindow_FM/2;
    lc_ywindow_FM = 0;//20;
	
	lc_sxyimageCanvas = 0.8;
	lc_ximageCanvas = lc_wwindow_FM/2 - (gc_ImageWidth * lc_sxyimageCanvas)/2;
	lc_yimageCanvas = 65;
	
	
	
    this.window_FM = {
                      puzzleType: 0, // 0 - puzzles of Zack, 1 - puzzles of Cody
					  curFolder: 0,
					  maxImageInFolder: 3,
					  curImageInFolder: 0,
					
					
					  group: undefined,
                      windowBmp: undefined,
			          windowSprite: undefined,
							 
					  caption: undefined,
							 
					  bnClose: {
                                bmp: undefined,
			                    group: undefined,
			                    sprite: undefined
					           },
									
					  bnUp: {
                             bmp: undefined,
			                 group: undefined,
			                 sprite: undefined
					        },
								
                      								
					  bnNextImage: {
                                    bmp: undefined,
			                        group: undefined,
			                        sprite: undefined
					               },
								   
					  imageCanvas: {
                                    bmp: undefined,
			                        group: undefined,
			                        sprite: undefined
					               },
										   
					  bnPrevImage: {
                                    bmp: undefined,
			                        group: undefined,
			                        sprite: undefined
					               },
							 
				  	  folders: undefined

                     };
    this.window_FM.caption = new Array();
    // window 'FileManager': caption 'PuzzlesOfZack'
    this.window_FM.caption[0] = {
                                 bmp: undefined,
			                     group: undefined,
			                     sprite: undefined
							    };
    // window 'FileManager': caption 'PuzzlesOfCody'
    this.window_FM.caption[1] = {
                                 bmp: undefined,
			                     group: undefined,
			                     sprite: undefined
							    };
								
    // window 'FileManager': folders
    this.window_FM.folders = new Array();
	//
    // Folders
    lc_wfolder = this.GameScene.cache.getImage('folder').width;
    lc_wfolder2 = lc_wfolder/2;
    lc_hfolder = this.GameScene.cache.getImage('folder').height;
    lc_dytext_folder = 5;
	
    lc_xfolder_TheSuiteLifeOfZackAndCody = 40;
    lc_yfolder_TheSuiteLifeOfZackAndCody = 120;
    this.window_FM.folders[0] = {
                                 //num: 0,
								 group: undefined,
                                 folderBmp: undefined,
			                     folderSprite: undefined,
							     textBmp: undefined,
							     textSprite: undefined
                                };
    // folder 'TheSuiteLifeOnDeck'
    lc_xfolder_TheSuiteLifeOnDeck = lc_xfolder_TheSuiteLifeOfZackAndCody + lc_wfolder + 120;
    lc_yfolder_TheSuiteLifeOnDeck = lc_yfolder_TheSuiteLifeOfZackAndCody;
    this.window_FM.folders[1] = {
                                 num: 1,
								 group: undefined,
                                 folderBmp: undefined,
			                     folderSprite: undefined,
							     textBmp: undefined,
							     textSprite: undefined
                                };
    // folder 'TheSuiteLifeMovie'
    lc_xfolder_TheSuiteLifeMovie = lc_xfolder_TheSuiteLifeOnDeck + lc_wfolder + 120;
    lc_yfolder_TheSuiteLifeMovie = lc_yfolder_TheSuiteLifeOfZackAndCody;
    this.window_FM.folders[2] = {
                                 num: 2,
								 group: undefined,
                                 folderBmp: undefined,
			                     folderSprite: undefined,
							     textBmp: undefined,
							     textSprite: undefined
                                };
	
	
	

	
	
    // window_FM: folder_TheSuiteLifeOfZackAndCody
    this.window_FM.folders[0].folderBmp = this.GameScene.make.bitmapData(lc_wfolder, lc_hfolder);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wfolder, lc_hfolder);
    this.window_FM.folders[0].folderBmp.copyRect('folder', lv_rect, 0, 0);
    this.window_FM.folders[0].folderSprite = this.GameScene.add.sprite(0, 0, this.window_FM.folders[0].folderBmp);
    //
    this.window_FM.folders[0].textBmp = this.GameScene.make.bitmapData(lc_wtext_TheSuiteLifeOfZackAndCody, lc_htext_TheSuiteLifeOfZackAndCody);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_TheSuiteLifeOfZackAndCody, lc_htext_TheSuiteLifeOfZackAndCody);
    this.window_FM.folders[0].textBmp.copyRect('text_TheSuiteLifeOfZackAndCody', lv_rect, 0, 0);
    this.window_FM.folders[0].textSprite = this.GameScene.add.sprite(0, 0, this.window_FM.folders[0].textBmp);
    //
    this.window_FM.folders[0].group = this.GameScene.game.add.group();
	this.window_FM.folders[0].group.num = 0;
    this.window_FM.folders[0].group.add(this.window_FM.folders[0].folderSprite);
    this.window_FM.folders[0].group.add(this.window_FM.folders[0].textSprite);
    this.window_FM.folders[0].group.position.x = lc_xfolder_TheSuiteLifeOfZackAndCody;
    this.window_FM.folders[0].group.position.y = lc_yfolder_TheSuiteLifeOfZackAndCody;
    this.window_FM.folders[0].textSprite.position.x = lc_wfolder2 - lc_wtext_TheSuiteLifeOfZackAndCody/2;
    this.window_FM.folders[0].textSprite.position.y = lc_hfolder + lc_dytext_folder;
    //
    // window_FM: folder_TheSuiteLifeOnDeck
    this.window_FM.folders[1].folderBmp = this.GameScene.make.bitmapData(lc_wfolder, lc_hfolder);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wfolder, lc_hfolder);
    this.window_FM.folders[1].folderBmp.copyRect('folder', lv_rect, 0, 0);
    this.window_FM.folders[1].folderSprite = this.GameScene.add.sprite(0, 0, this.window_FM.folders[1].folderBmp);
    //
    this.window_FM.folders[1].textBmp = this.GameScene.make.bitmapData(lc_wtext_TheSuiteLifeOnDeck, lc_htext_TheSuiteLifeOnDeck);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_TheSuiteLifeOnDeck, lc_htext_TheSuiteLifeOnDeck);
    this.window_FM.folders[1].textBmp.copyRect('text_TheSuiteLifeOnDeck', lv_rect, 0, 0);
    this.window_FM.folders[1].textSprite = this.GameScene.add.sprite(0, 0, this.window_FM.folders[1].textBmp);
    //
    this.window_FM.folders[1].group = this.GameScene.game.add.group();
	this.window_FM.folders[1].group.num = 1;
    this.window_FM.folders[1].group.add(this.window_FM.folders[1].folderSprite);
    this.window_FM.folders[1].group.add(this.window_FM.folders[1].textSprite);
    this.window_FM.folders[1].group.position.x = lc_xfolder_TheSuiteLifeOnDeck;
    this.window_FM.folders[1].group.position.y = lc_yfolder_TheSuiteLifeOnDeck;
    this.window_FM.folders[1].textSprite.position.x = lc_wfolder2 - lc_wtext_TheSuiteLifeOnDeck/2;
    this.window_FM.folders[1].textSprite.position.y = lc_hfolder + lc_dytext_folder;
    //
    // window_FM: folder_TheSuiteLifeMovie
    this.window_FM.folders[2].folderBmp = this.GameScene.make.bitmapData(lc_wfolder, lc_hfolder);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wfolder, lc_hfolder);
    this.window_FM.folders[2].folderBmp.copyRect('folder', lv_rect, 0, 0);
    this.window_FM.folders[2].folderSprite = this.GameScene.add.sprite(0, 0, this.window_FM.folders[2].folderBmp);
    //
    this.window_FM.folders[2].textBmp = this.GameScene.make.bitmapData(lc_wtext_TheSuiteLifeMovie, lc_htext_TheSuiteLifeMovie);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_TheSuiteLifeMovie, lc_htext_TheSuiteLifeMovie);
    this.window_FM.folders[2].textBmp.copyRect('text_TheSuiteLifeMovie', lv_rect, 0, 0);
    this.window_FM.folders[2].textSprite = this.GameScene.add.sprite(0, 0, this.window_FM.folders[2].textBmp);
    //
    this.window_FM.folders[2].group = this.GameScene.game.add.group();
	this.window_FM.folders[2].group.num = 2;
    this.window_FM.folders[2].group.add(this.window_FM.folders[2].folderSprite);
    this.window_FM.folders[2].group.add(this.window_FM.folders[2].textSprite);
    this.window_FM.folders[2].group.position.x = lc_xfolder_TheSuiteLifeMovie;
    this.window_FM.folders[2].group.position.y = lc_yfolder_TheSuiteLifeMovie;
    this.window_FM.folders[2].textSprite.position.x = lc_wfolder2 - lc_wtext_TheSuiteLifeMovie/2;
    this.window_FM.folders[2].textSprite.position.y = lc_hfolder + lc_dytext_folder;
	//
    // window_FM: bnClose
    this.window_FM.bnClose.bmp = this.GameScene.make.bitmapData(lc_wbnClose, lc_hbnClose);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnClose, lc_hbnClose);
    this.window_FM.bnClose.bmp.copyRect('bnClose', lv_rect, 0, 0);
    this.window_FM.bnClose.sprite = this.GameScene.add.sprite(0, 0, this.window_FM.bnClose.bmp);
    this.window_FM.bnClose.group = this.GameScene.game.add.group();
    this.window_FM.bnClose.group.add(this.window_FM.bnClose.sprite);
    this.window_FM.bnClose.group.position.x = lc_wwindow_FM - lc_wbnClose - lc_dxybnClose;
    this.window_FM.bnClose.group.position.y = lc_dxybnClose;
    //
    // window_FM: bnUp
    this.window_FM.bnUp.bmp = this.GameScene.make.bitmapData(lc_wbnUp, lc_hbnUp);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnUp, lc_hbnUp);
    this.window_FM.bnUp.bmp.copyRect('arrow_up', lv_rect, 0, 0);
    this.window_FM.bnUp.sprite = this.GameScene.add.sprite(0, 0, this.window_FM.bnUp.bmp);
    this.window_FM.bnUp.group = this.GameScene.game.add.group();
    this.window_FM.bnUp.group.add(this.window_FM.bnUp.sprite);
    this.window_FM.bnUp.group.position.x = lc_xFistTopArrow;
    this.window_FM.bnUp.group.position.y = lc_yFistTopArrow;
    //
    // window_FM: imageCanvas
    this.window_FM.imageCanvas.bmp = this.GameScene.make.bitmapData(gc_ImageWidth, gc_ImageHeight);
    lv_rect = new Phaser.Rectangle(0, 0, gc_ImageWidth, gc_ImageHeight);
    this.window_FM.imageCanvas.bmp.copyRect('00_0', lv_rect, 0, 0);
    this.window_FM.imageCanvas.sprite = this.GameScene.add.sprite(0, 0, this.window_FM.imageCanvas.bmp);
    this.window_FM.imageCanvas.group = this.GameScene.game.add.group();
    this.window_FM.imageCanvas.group.add(this.window_FM.imageCanvas.sprite);
    this.window_FM.imageCanvas.group.position.x = lc_ximageCanvas;
    this.window_FM.imageCanvas.group.position.y = lc_yimageCanvas;
	this.window_FM.imageCanvas.sprite.scale.setTo(lc_sxyimageCanvas, lc_sxyimageCanvas);
    //
    // window_FM: bnPrevImage
    this.window_FM.bnPrevImage.bmp = this.GameScene.make.bitmapData(lc_wbnPrevImage, lc_hbnPrevImage);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnPrevImage, lc_hbnPrevImage);
    this.window_FM.bnPrevImage.bmp.copyRect('arrow_left', lv_rect, 0, 0);
    this.window_FM.bnPrevImage.sprite = this.GameScene.add.sprite(0, 0, this.window_FM.bnPrevImage.bmp);
    this.window_FM.bnPrevImage.group = this.GameScene.game.add.group();
    this.window_FM.bnPrevImage.group.add(this.window_FM.bnPrevImage.sprite);
    this.window_FM.bnPrevImage.group.position.x = lc_dxbnPrevArrow;
    this.window_FM.bnPrevImage.group.position.y = lc_hwindow_FM - lc_hbnPrevImage - lc_dybnPrevArrow;
    //
    // window_FM: bnNextImage
    this.window_FM.bnNextImage.bmp = this.GameScene.make.bitmapData(lc_wbnNextImage, lc_hbnNextImage);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnNextImage, lc_hbnNextImage);
    this.window_FM.bnNextImage.bmp.copyRect('arrow_right', lv_rect, 0, 0);
    this.window_FM.bnNextImage.sprite = this.GameScene.add.sprite(0, 0, this.window_FM.bnNextImage.bmp);
    this.window_FM.bnNextImage.group = this.GameScene.game.add.group();
    this.window_FM.bnNextImage.group.add(this.window_FM.bnNextImage.sprite);
    this.window_FM.bnNextImage.group.position.x = lc_wwindow_FM - lc_wbnNextImage - lc_dxbnPrevArrow;
    this.window_FM.bnNextImage.group.position.y = this.window_FM.bnPrevImage.group.position.y;
    //
    // window_FM: caption[0]
    this.window_FM.caption[0].bmp = this.GameScene.make.bitmapData(lc_wtext_PuzzlesOfZack, lc_htext_PuzzlesOfZack);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_PuzzlesOfZack, lc_htext_PuzzlesOfZack);
    this.window_FM.caption[0].bmp.copyRect('text_PuzzlesOfZack', lv_rect, 0, 0);
    this.window_FM.caption[0].sprite = this.GameScene.add.sprite(0, 0, this.window_FM.caption[0].bmp);
    this.window_FM.caption[0].group = this.GameScene.game.add.group();
    this.window_FM.caption[0].group.add(this.window_FM.caption[0].sprite);
    this.window_FM.caption[0].group.position.x = lc_wwindow_FM/2 - lc_wtext_PuzzlesOfZack/2;
    this.window_FM.caption[0].group.position.y = lc_dyCaption;
    //
    // window_FM: caption[1]
    this.window_FM.caption[1].bmp = this.GameScene.make.bitmapData(lc_wtext_PuzzlesOfCody, lc_htext_PuzzlesOfCody);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_PuzzlesOfCody, lc_htext_PuzzlesOfCody);
    this.window_FM.caption[1].bmp.copyRect('text_PuzzlesOfCody', lv_rect, 0, 0);
    this.window_FM.caption[1].sprite = this.GameScene.add.sprite(0, 0, this.window_FM.caption[1].bmp);
    this.window_FM.caption[1].group = this.GameScene.game.add.group();
    this.window_FM.caption[1].group.add(this.window_FM.caption[1].sprite);
    this.window_FM.caption[1].group.position.x = lc_wwindow_FM/2 - lc_wtext_PuzzlesOfCody/2;
    this.window_FM.caption[1].group.position.y = lc_dyCaption;
    //
    // window_FM: window
    this.window_FM.windowBmp = this.GameScene.make.bitmapData(lc_wwindow_FM, lc_hwindow_FM);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wwindow_FM, lc_hwindow_FM);
    this.window_FM.windowBmp.copyRect('Window_800x529_opacity2', lv_rect, 0, 0);
    this.window_FM.windowSprite = this.GameScene.add.sprite(0, 0, this.window_FM.windowBmp);
    //
    // window_FM
    // 
    this.window_FM.group = this.GameScene.game.add.group();
    this.window_FM.group.add(this.window_FM.windowSprite);
    this.window_FM.group.add(this.window_FM.folders[0].group);
    this.window_FM.group.add(this.window_FM.folders[1].group);
    this.window_FM.group.add(this.window_FM.folders[2].group);
    this.window_FM.group.add(this.window_FM.bnClose.group);
    this.window_FM.group.add(this.window_FM.bnUp.group);
	this.window_FM.group.add(this.window_FM.imageCanvas.group);
    this.window_FM.group.add(this.window_FM.bnPrevImage.group);
    this.window_FM.group.add(this.window_FM.bnNextImage.group);
	this.window_FM.imageCanvas.group.visible = false;
	this.window_FM.bnPrevImage.group.visible = false;
	this.window_FM.bnNextImage.group.visible = false;
    this.window_FM.bnUp.group.visible = true;
	this.window_FM.bnUp.sprite.alpha = 0.1;
    this.window_FM.group.add(this.window_FM.caption[0].group);
    //this.window_FM.caption[0].group.visible = false;
    this.window_FM.caption[1].group.visible = false;
    this.window_FM.group.add(this.window_FM.caption[1].group);
    this.window_FM.group.position.x = lc_xwindow_FM;
    this.window_FM.group.position.y = lc_ywindow_FM;
    this.window_FM.group.visible = fp_Visible;
	//
	//
	var lv_i;
	for(lv_i = 0; lv_i < this.window_FM.folders.length; lv_i++)
	{
      this.window_FM.folders[lv_i].folderSprite.inputEnabled = true;
      this.window_FM.folders[lv_i].textSprite.inputEnabled = true;
      this.window_FM.folders[lv_i].group.onChildInputDown.add(this.m_onMouseDown_window_FM_folder, this.window_FM.folders[lv_i].group);
	}
	//
    this.window_FM.bnPrevImage.sprite.inputEnabled = false;
    this.window_FM.bnPrevImage.group.onChildInputDown.add(this.m_onMouseDown_window_FM_bnPrevImage, this.window_FM.bnPrevImage.group);
	//
    this.window_FM.bnNextImage.sprite.inputEnabled = false;
    this.window_FM.bnNextImage.group.onChildInputUp.add(this.m_onMouseDown_window_FM_bnNextImage, this.window_FM.bnNextImage.group);
	//
    this.window_FM.bnUp.sprite.inputEnabled = false;
    this.window_FM.bnUp.group.onChildInputDown.add(this.m_onMouseDown_window_FM_bnUp, this.window_FM.bnUp.group);
	//
    this.window_FM.bnClose.sprite.inputEnabled = true;
    this.window_FM.bnClose.group.onChildInputDown.add(this.m_onMouseDown_window_FM_bnClose, this.window_FM.bnClose.group);
	//
    this.window_FM.imageCanvas.sprite.inputEnabled = true;
    this.window_FM.imageCanvas.group.onChildInputDown.add(this.m_onMouseDown_window_FM_imageCanvas, this.window_FM.imageCanvas.group);
	
	
	this.window_FM.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
	
  }
  //- ********************************************************************************************************* - m_Create_window_LevelComplete()
  this.m_Create_window_LevelComplete = function(fp_Visible)
  {
	var lv_rect;
    var lc_wtext_LevelComplete, lc_htext_LevelComplete;
    var lc_xtext_LevelComplete, lc_ytext_LevelComplete;
	var lc_wbnOk, lc_hbnOk;
	var lc_xbnOk, lc_ybnOk;
	var lc_wbnOk, lc_hbnOk;
	var lc_xbnOk, lc_ybnOk;
	var lc_wwindow_LevelComplete, lc_hwindow_LevelComplete;
	var lc_xwindow_LevelComplete, lc_ywindow_LevelComplete;
  

	
    lc_wwindow_LevelComplete = this.GameScene.cache.getImage('Window_303x194_opacity1').width;
    lc_hwindow_LevelComplete = this.GameScene.cache.getImage('Window_303x194_opacity1').height;
    lc_xwindow_LevelComplete = 0;
	lc_ywindow_LevelComplete = 0;
	
    lc_wtext_LevelComplete = this.GameScene.cache.getImage('text_LevelComplete').width;
    lc_htext_LevelComplete = this.GameScene.cache.getImage('text_LevelComplete').height;
    lc_xtext_LevelComplete = (lc_wwindow_LevelComplete/2 - lc_wtext_LevelComplete/2);
	lc_ytext_LevelComplete = 30 * gv_scaleRatio;
	
    lc_wbnOk = this.GameScene.cache.getImage('bnOk').width;
    lc_hbnOk = this.GameScene.cache.getImage('bnOk').height;
    lc_xbnOk = 10;
	lc_ybnOk = 120;
	
    lc_wbnRestartLevel = this.GameScene.cache.getImage('bnRestartLevel').width;
    lc_hbnRestartLevel = this.GameScene.cache.getImage('bnRestartLevel').height;
    lc_xbnRestartLevel = lc_wwindow_LevelComplete - lc_wbnRestartLevel - lc_xbnOk;
	lc_ybnRestartLevel = lc_ybnOk;
	
	
    // window 'LevelComplete'
    this.window_LevelComplete = {
					             group: undefined,
                                 windowBmp: undefined,
			                     windowSprite: undefined,
					
					             text_LevelComplete: {
                                                      bmp: undefined,
			                                          sprite: undefined
					                                 },
					
					             bnOk: {
                                        bmp: undefined,
			                            group: undefined,
			                            sprite: undefined
					                   },
									 
					             bnRestartLevel: {
                                                  bmp: undefined,
			                                      group: undefined,
			                                      sprite: undefined
					                             }
									  
									  
                          };
						  
	// window_LevelComplete: text_LevelComplete
    this.window_LevelComplete.text_LevelComplete.bmp = this.GameScene.make.bitmapData(lc_wtext_LevelComplete, lc_htext_LevelComplete);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wtext_LevelComplete, lc_htext_LevelComplete);
    this.window_LevelComplete.text_LevelComplete.bmp.copyRect('text_LevelComplete', lv_rect, 0, 0);
    this.window_LevelComplete.text_LevelComplete.sprite = this.GameScene.add.sprite(0, 0, this.window_LevelComplete.text_LevelComplete.bmp);
    this.window_LevelComplete.text_LevelComplete.sprite.position.x = lc_xtext_LevelComplete;
    this.window_LevelComplete.text_LevelComplete.sprite.position.y = lc_ytext_LevelComplete;
	
    // window_LevelComplete: bnOk
    this.window_LevelComplete.bnOk.bmp = this.GameScene.make.bitmapData(lc_wbnOk, lc_hbnOk);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnOk, lc_hbnOk);
    this.window_LevelComplete.bnOk.bmp.copyRect('bnOk', lv_rect, 0, 0);
    this.window_LevelComplete.bnOk.sprite = this.GameScene.add.sprite(0, 0, this.window_LevelComplete.bnOk.bmp);
    this.window_LevelComplete.bnOk.group = this.GameScene.game.add.group();
    this.window_LevelComplete.bnOk.group.add(this.window_LevelComplete.bnOk.sprite);
    this.window_LevelComplete.bnOk.group.position.x = lc_xbnOk;
    this.window_LevelComplete.bnOk.group.position.y = lc_ybnOk;
						  
    // window_LevelComplete: bnRestartLevel
    this.window_LevelComplete.bnRestartLevel.bmp = this.GameScene.make.bitmapData(lc_wbnRestartLevel, lc_hbnRestartLevel);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnRestartLevel, lc_hbnRestartLevel);
    this.window_LevelComplete.bnRestartLevel.bmp.copyRect('bnRestartLevel', lv_rect, 0, 0);
    this.window_LevelComplete.bnRestartLevel.sprite = this.GameScene.add.sprite(0, 0, this.window_LevelComplete.bnRestartLevel.bmp);
    this.window_LevelComplete.bnRestartLevel.group = this.GameScene.game.add.group();
    this.window_LevelComplete.bnRestartLevel.group.add(this.window_LevelComplete.bnRestartLevel.sprite);
    this.window_LevelComplete.bnRestartLevel.group.position.x = lc_xbnRestartLevel;
    this.window_LevelComplete.bnRestartLevel.group.position.y = lc_ybnRestartLevel;
  
    // window_LevelComplete: window
    this.window_LevelComplete.windowBmp = this.GameScene.make.bitmapData(lc_wwindow_LevelComplete, lc_hwindow_LevelComplete);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wwindow_LevelComplete, lc_hwindow_LevelComplete);
    this.window_LevelComplete.windowBmp.copyRect('Window_303x194_opacity1', lv_rect, 0, 0);
    this.window_LevelComplete.windowSprite = this.GameScene.add.sprite(0, 0, this.window_LevelComplete.windowBmp);
  
    // window_LevelComplete
    this.window_LevelComplete.group = this.GameScene.game.add.group();
    this.window_LevelComplete.group.add(this.window_LevelComplete.windowSprite);
    this.window_LevelComplete.group.add(this.window_LevelComplete.text_LevelComplete.sprite);
    this.window_LevelComplete.group.add(this.window_LevelComplete.bnOk.group);
    this.window_LevelComplete.group.add(this.window_LevelComplete.bnRestartLevel.group);
    this.window_LevelComplete.group.position.x = gv_MyGame.GameWidth/2 - (lc_wwindow_LevelComplete/2) * gv_scaleRatio;
    this.window_LevelComplete.group.position.y = (lc_hwindow_LevelComplete/2) * gv_scaleRatio;
    //this.window_LevelComplete.group.position.y = gv_MyGame.GameHeight/2 - (lc_hwindow_LevelComplete/2) * gv_scaleRatio;
    this.window_LevelComplete.group.visible = fp_Visible;
	
	
	//
    this.window_LevelComplete.bnOk.sprite.inputEnabled = true;
    this.window_LevelComplete.bnOk.group.onChildInputDown.add(this.m_onMouseDown_window_LevelComplete_bnOk, this.window_LevelComplete.bnOk.group);
	//
    this.window_LevelComplete.bnRestartLevel.sprite.inputEnabled = true;
    this.window_LevelComplete.bnRestartLevel.group.onChildInputDown.add(this.m_onMouseDown_window_LevelComplete_bnRestartLevel, this.window_LevelComplete.bnRestartLevel.group);
	
    this.window_LevelComplete.group.scale.setTo(gv_scaleRatio, gv_scaleRatio);
  }
  //- ********************************************************************************************************* - m_Create_window_DifficultyChoice()
  this.m_Create_window_DifficultyChoice = function(fp_Visible)
  {
	var lv_rect;
	var lc_wbnEasy, lc_hbnEasy;
	var lc_xbnEasy, lc_ybnEasy;
	var lc_wbnHard, lc_hbnHard;
	var lc_xbnHard, lc_ybnHard;
	var lc_wwindow_DifficultyChoice, lc_wwindow_DifficultyChoice;
	
	
    lc_wwindow_DifficultyChoice = this.GameScene.cache.getImage('Window_303x194_opacity1').width;
    lc_hwindow_DifficultyChoice = this.GameScene.cache.getImage('Window_303x194_opacity1').height;
	
    lc_wbnEasy = this.GameScene.cache.getImage('bnEasy').width;
    lc_hbnEasy = this.GameScene.cache.getImage('bnEasy').height;
    lc_xbnEasy = lc_wwindow_DifficultyChoice/2 - lc_wbnEasy/2;
	lc_ybnEasy = 30;
	
    lc_wbnHard = this.GameScene.cache.getImage('bnHard').width;
    lc_hbnHard= this.GameScene.cache.getImage('bnHard').height;
    lc_xbnHard = lc_wwindow_DifficultyChoice/2 - lc_wbnHard/2;
	lc_ybnHard = lc_ybnEasy + lc_hbnEasy + 25;
	
	
    // window 'DifficultyChoice'
    this.window_DifficultyChoice = {
					                group: undefined,
                                    windowBmp: undefined,
			                        windowSprite: undefined,
					
					                bnEasy: {
                                             bmp: undefined,
			                                 group: undefined,
			                                 sprite: undefined
					                        },
									 
					                bnHard: {
                                             bmp: undefined,
			                                 group: undefined,
			                                 sprite: undefined
					                        }
                                   };
	
	
    // window_DifficultyChoice: bnEasy
    this.window_DifficultyChoice.bnEasy.bmp = this.GameScene.make.bitmapData(lc_wbnEasy, lc_hbnEasy);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnEasy, lc_hbnEasy);
    this.window_DifficultyChoice.bnEasy.bmp.copyRect('bnEasy', lv_rect, 0, 0);
    this.window_DifficultyChoice.bnEasy.sprite = this.GameScene.add.sprite(0, 0, this.window_DifficultyChoice.bnEasy.bmp);
    this.window_DifficultyChoice.bnEasy.group = this.GameScene.game.add.group();
    this.window_DifficultyChoice.bnEasy.group.add(this.window_DifficultyChoice.bnEasy.sprite);
    this.window_DifficultyChoice.bnEasy.group.position.x = lc_xbnEasy;
    this.window_DifficultyChoice.bnEasy.group.position.y = lc_ybnEasy;
	
    // window_DifficultyChoice: bnHard
    this.window_DifficultyChoice.bnHard.bmp = this.GameScene.make.bitmapData(lc_wbnHard, lc_hbnHard);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wbnHard, lc_hbnHard);
    this.window_DifficultyChoice.bnHard.bmp.copyRect('bnHard', lv_rect, 0, 0);
    this.window_DifficultyChoice.bnHard.sprite = this.GameScene.add.sprite(0, 0, this.window_DifficultyChoice.bnHard.bmp);
    this.window_DifficultyChoice.bnHard.group = this.GameScene.game.add.group();
    this.window_DifficultyChoice.bnHard.group.add(this.window_DifficultyChoice.bnHard.sprite);
    this.window_DifficultyChoice.bnHard.group.position.x = lc_xbnHard;
    this.window_DifficultyChoice.bnHard.group.position.y = lc_ybnHard;
	
    // window_DifficultyChoice: window
    this.window_DifficultyChoice.windowBmp = this.GameScene.make.bitmapData(lc_wwindow_DifficultyChoice, lc_hwindow_DifficultyChoice);
    lv_rect = new Phaser.Rectangle(0, 0, lc_wwindow_DifficultyChoice, lc_hwindow_DifficultyChoice);
    this.window_DifficultyChoice.windowBmp.copyRect('Window_303x194_opacity1', lv_rect, 0, 0);
    this.window_DifficultyChoice.windowSprite = this.GameScene.add.sprite(0, 0, this.window_DifficultyChoice.windowBmp);
	
    // window_FM
    this.window_DifficultyChoice.group = this.GameScene.game.add.group();
    this.window_DifficultyChoice.group.add(this.window_DifficultyChoice.windowSprite);
    this.window_DifficultyChoice.group.add(this.window_DifficultyChoice.bnEasy.group);
    this.window_DifficultyChoice.group.add(this.window_DifficultyChoice.bnHard.group);
    this.window_DifficultyChoice.group.position.x = gv_MyGame.GameWidth/2 - lc_wwindow_DifficultyChoice/2;
    this.window_DifficultyChoice.group.position.y = gv_MyGame.GameHeight/2 - lc_hwindow_DifficultyChoice/2;
    this.window_DifficultyChoice.group.visible = fp_Visible;
	
	
  }
  //- ********************************************************************************************************* -
  
  
  
  
  this.GameScene = fp_GameScene;

  this.MesWinDisappearing = false;
  
  this.m_Create_wallpaper();
  this.m_Create_bottomStrip();
  this.m_Create_logo();
  this.m_Create_text_ToGameCommunity();
  this.m_Create_folder_PuzzlesOfZack();
  this.m_Create_folder_PuzzlesOfCody();
  this.m_Create_MesWin_WatchTheNewsInCommunity();
  this.m_Create_window_FM(false);
  this.m_Create_window_DifficultyChoice(false);
  this.m_Create_SIWindow(false);
  this.m_Create_puzzleWindow(false);
  this.m_Create_window_LevelComplete(false);
  
  //this.mavWindow_visible = false;//1D!



  //this.window_mavWindow = null;
  this.m_Create_mavWindow(false);//this.window_mavWindow = null;
  


}







//
// **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK **** ZACK ****
//
//-------------------------------------------------------------------------------------------------------------------
function ZackTile()
{
  // bitmap части исходной картинки
  this.bmp = undefined;
  
  this.sprite = undefined;
  this.group = undefined;
  this.initPosition = {
                       x: undefined,
					   y: undefined
                      };
}
//-------------------------------------------------------------------------------------------------------------------
// fp_GameScene - указатель на игровое пространство, игровую сцену
function ZackPuzzle(fp_GameScene, fp_Parent, fp_TileWidth, fp_TileHeight)
{
  var lv_k;	
  
  this.workArea = {
	               leftTop_x: undefined,
				   leftTop_y: undefined,
				   rightBottom_x: undefined,
				   rightBottom_y: undefined
                  };
				  

  this.GameScene = fp_GameScene;
  this.TileWidth = fp_TileWidth;
  this.TileHeight = fp_TileHeight;

	// округление при делении не требуется, т.к. размеры картинки и размеры куска пазла подбираются соответствующим образом
	this.wTileQuantity = gc_ImageWidth/this.TileWidth;// w - Width (количество частей пазла по ширине)
	this.hTileQuantity = gc_ImageHeight/this.TileHeight;// h -Heigth (количество частей пазла по высоте)
	
	
    this.TileMargin_d = 10 * gv_scaleRatio;// distance
	
	this.TileMargin_dX = this.TileWidth * gv_scaleRatio + this.TileMargin_d;
	this.TileMargin_dY = this.TileHeight * gv_scaleRatio + this.TileMargin_d;
	
    this.workArea.leftTop_x = 10 * gv_scaleRatio;
    this.workArea.leftTop_y = 10 * gv_scaleRatio;
   
    this.workArea.rightBottom_x = (this.wTileQuantity)*(this.TileWidth  * gv_scaleRatio) + this.workArea.leftTop_x;
    this.workArea.rightBottom_y = (this.hTileQuantity)*(this.TileHeight * gv_scaleRatio) + this.workArea.leftTop_y;
	
	
	

   
   
   
  //this.GameScene.load.image('WholeImage', ('content/img/' + fp_ImageName) );
   
   
   
  //- ********************************************************************************************************* -
  this.m_Empty = function(fp_k, fp_X, fp_Y)
  {
    var lv_k;
	
	fp_X = Math.round(fp_X);// Math.round(n * 100) / 100
	fp_Y = Math.round(fp_Y);
	
	if(
	   !( (fp_X >= Math.round(this.workArea.leftTop_x)) && (fp_X <= Math.round(this.workArea.rightBottom_x)) &&
	    (fp_Y >= Math.round(this.workArea.leftTop_y)) && (fp_Y <= Math.round(this.workArea.rightBottom_y)))
	  )
	  return 0;
	
	for(lv_k = 0; lv_k < this.Tiles.length; lv_k++)
	{
	  if(lv_k === fp_k)
	    continue;

	  if( 
	     (Math.round(this.Tiles[lv_k].group.position.x) === fp_X) &&
	     (Math.round(this.Tiles[lv_k].group.position.y) === fp_Y)
	    )
		return 0;
	}
	
    return 1;
  }
  //- ********************************************************************************************************* -
  this.m_LevelComlete = function()
  {
    var lv_k;
	
	for(lv_k = 0; lv_k < this.Tiles.length; lv_k++)
	{
	  lv_CurTile = this.Tiles[lv_k];
	  if(
	     !((Math.round(lv_CurTile.group.position.x) === Math.round(lv_CurTile.initPosition.x)) &&
		   (Math.round(lv_CurTile.group.position.y) === Math.round(lv_CurTile.initPosition.y)))
	    )
		return 0;
	}
	return 1;
  }
  //- ********************************************************************************************************* -
  this.m_onMouseDown_Tile = function(fp_Tile, fp_Pointer)
  {
	var lv_k;
	var lv_A = 1;
	  
	/*
	fp_Tile.parent.MouseDragTile = true;
	fp_Tile.parent.mP = fp_Pointer;
	fp_Tile.parent.mX = fp_Pointer.positionDown.x;
	fp_Tile.parent.mY = fp_Pointer.positionDown.y;
	*/
	
	lv_dX = gv_GLOBAL_ZACK_THIS.ZackPuzzle.TileMargin_dX;
	lv_dY = gv_GLOBAL_ZACK_THIS.ZackPuzzle.TileMargin_dY;
	
	// пробуем подвинуть влево
	lv_NewX = fp_Tile.parent.position.x - lv_dX;
	lv_NewY = fp_Tile.parent.position.y;
	if(lv_A)
	if(gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_Empty(fp_Tile.parent.TileNum, lv_NewX, lv_NewY))
	{
	  fp_Tile.parent.position.x = lv_NewX,
	  fp_Tile.parent.position.y = lv_NewY;
	  lv_A = 0;
	}
	
	// пробуем подвинуть вправо
	lv_NewX = fp_Tile.parent.position.x + lv_dX;
	lv_NewY = fp_Tile.parent.position.y;
	if(lv_A)
	if(gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_Empty(fp_Tile.parent.TileNum, lv_NewX, lv_NewY))
	{
	  fp_Tile.parent.position.x = lv_NewX,
	  fp_Tile.parent.position.y = lv_NewY;
	  lv_A = 0;
	}
	  
	// пробуем подвинуть вверх
	lv_NewX = fp_Tile.parent.position.x;
	lv_NewY = fp_Tile.parent.position.y - lv_dY;
	if(lv_A)
	if(gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_Empty(fp_Tile.parent.TileNum, lv_NewX, lv_NewY))
	{
	  fp_Tile.parent.position.x = lv_NewX,
	  fp_Tile.parent.position.y = lv_NewY;
	  lv_A = 0;
	}
	  
	// пробуем подвинуть вниз
	lv_NewX = fp_Tile.parent.position.x;
	lv_NewY = fp_Tile.parent.position.y + lv_dY;
	if(lv_A)
	if(gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_Empty(fp_Tile.parent.TileNum, lv_NewX, lv_NewY))
	{
	  fp_Tile.parent.position.x = lv_NewX,
	  fp_Tile.parent.position.y = lv_NewY;
	  lv_A = 0;
	}
	  

	
	

	//alert("selected");
  }
  //- ********************************************************************************************************* -
  this.m_onMouseUp_Tile = function(fp_Tile, fp_Pointer)
  {
    if(gv_LevelComplete)
	 return;
	
	fp_Tile.parent.MouseDragTile = false;
  }
  //- ********************************************************************************************************* -
  this.m_CreatePuzzle = function(fp_ImageName)
  {
	this.ImageName = fp_ImageName;
	


	this.m_CreateTiles();
	this.m_MixTiles();

  }
  //- ********************************************************************************************************* -
  this.m_CreateTiles = function()
  {
	var lv_ix, lv_iy, lv_k;	
	  
	lv_k = 0;
	for(lv_iy = 0; lv_iy < this.hTileQuantity; lv_iy++)
	for(lv_cx = 0, lv_ix = 0; lv_ix < this.wTileQuantity; lv_ix++)
	{
	  
	  lv_rect = new Phaser.Rectangle((lv_ix * this.TileWidth), (lv_iy * this.TileHeight), this.TileWidth, this.TileHeight);
	  this.Tiles[lv_k].bmp.copyRect(this.ImageName, lv_rect, 0, 0);

	  this.Tiles[lv_k].initPosition.x = lv_ix*(this.TileWidth  * gv_scaleRatio + this.TileMargin_d) + this.workArea.leftTop_x;
	  this.Tiles[lv_k].initPosition.y = lv_iy*(this.TileHeight * gv_scaleRatio + this.TileMargin_d) + this.workArea.leftTop_y;
      //
	  this.Tiles[lv_k].group.position.x = this.Tiles[lv_k].initPosition.x;
	  this.Tiles[lv_k].group.position.y = this.Tiles[lv_k].initPosition.y;
	  
	  this.Tiles[lv_k].group.mX = 0;
	  this.Tiles[lv_k].group.mY = 0;
	  this.Tiles[lv_k].group.TileNum = lv_k;
	  this.Tiles[lv_k].group.mP = 0;
      this.Tiles[lv_k].group.visible = true;

	  //gv_scaleRatio = 0.3;//0D! //Q?
      this.Tiles[lv_k].sprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);//0D! //Q?

	  
	  lv_k++;
	  if(lv_k === (this.hTileQuantity * this.wTileQuantity - 1))
	    break;
	}	  

  }
  //- ********************************************************************************************************* -
  this.m_MixTiles = function() // m_MixTiles() - Zack
  {
    
	
	var lv_k, lv_rk;
    var lv_r;
	var lv_px, lv_py;
	var lv_repeat;
	for(lv_repeat = 0; lv_repeat < 600; lv_repeat++)
	for(lv_k = 0; lv_k < this.Tiles.length; lv_k++)
	{
	  lv_rk = Math.round(Math.random() * 100);
	  if(lv_rk > (this.Tiles.length - 1))
	  {
	    // lv_r = (Math.random() >= 0.5)?1:0;
		// lv_rk = 5 + lv_r;
		lv_rk = lv_k;
	  }
	  
	  this.m_onMouseDown_Tile(this.Tiles[lv_rk].sprite);
	
	}
	
	
	
	
	
	
	
	
	
	var lv_ix, lv_iy;
	var lv_bix, lv_biy;
	var lv_lx, lv_ly;
	var lv_k;
	var lv_c;
	var lv_r;
	var lv_repeatAmount;
	
	// lv_iy*this.wTileQuantity + (lv_ix - 1); // предыдущий элемент по оси X
	// lv_iy*this.wTileQuantity + (lv_ix + 1); // следующий элемент по оси X
	
	// (lv_iy - 1)*this.wTileQuantity + lv_ix; // предыдущий элемент по оси Y
	// (lv_iy + 1)*this.wTileQuantity + lv_ix; // следующий элемент по оси Y
	
	
	// lv_k = 7;
	// lv_ix = 3;
	// lv_iy = 2;
	// this.Tiles[lv_k].group.position.x = lv_ix*(this.TileWidth  * gv_scaleRatio + this.TileMargin_d) + this.workArea.leftTop_x;
	// this.Tiles[lv_k].group.position.y = lv_iy*(this.TileHeight * gv_scaleRatio + this.TileMargin_d) + this.workArea.leftTop_y;
	
	// if(gv_LevelDifficulty === 0)
	  // lv_repeatAmount = 100;
	// else
	  // lv_repeatAmount = 600;
	lv_repeatAmount = 600;
	
	lv_lx = this.wTileQuantity - 1;
	lv_ly = this.hTileQuantity - 1;
	lv_ix = lv_lx;
	lv_iy = lv_ly;
	for(lv_c = 0; lv_c < lv_repeatAmount; lv_c++)
	{
	  lv_bix = lv_ix;
	  lv_biy = lv_iy;
	  lv_r = (Math.random() >= 0.5)?1:0;// 0 - ось X; 0 - ось Y
	  if(lv_r === 0)
	    lv_k = lv_iy*this.wTileQuantity + (lv_ix + 1), // следующий элемент по оси X
		lv_bix = lv_ix + 1;
	  else
	    lv_k = (lv_iy + 1)*this.wTileQuantity + lv_ix, // следующий элемент по оси Y
		lv_biy = lv_iy + 1;
		
	  if((lv_k < 0) || (lv_k >= this.Tiles.length))
	  {
	    if(lv_r === 0)
	      lv_k = lv_iy*this.wTileQuantity + (lv_ix - 1), // предыдущий элемент по оси X
		  lv_bix = lv_ix - 1;
	    else
	      lv_k = (lv_iy - 1)*this.wTileQuantity + lv_ix, // предыдущий элемент по оси Y
		  lv_biy = lv_iy - 1;
	  }
	  lv_ix = lv_bix;
	  lv_iy = lv_biy;
	  this.m_onMouseDown_Tile(this.Tiles[lv_k].sprite);
	  
	}
	
	
  }
  //- ********************************************************************************************************* -
  this.m_HideTiles = function()
  {
    var lv_k;
	this.Parent.windowMask.visible = false;
	for(lv_k = 0; lv_k < this.Tiles.length; lv_k++)
      this.Tiles[lv_k].group.visible = false;
  }
  
    this.Parent = fp_Parent;
	this.Tiles = [];
	for(lv_k = 0, lv_k = 0; lv_k < (this.hTileQuantity * this.wTileQuantity - 1); lv_k++)
	{
	  // создаем экземпляр класса ZackTile
	  this.Tiles[lv_k] = new ZackTile();
	  this.Tiles[lv_k].bmp = this.GameScene.make.bitmapData(this.TileWidth, this.TileHeight);
	  this.Tiles[lv_k].sprite = this.GameScene.add.sprite(0, 0, this.Tiles[lv_k].bmp);
	  this.Tiles[lv_k].group = this.GameScene.game.add.group();
	  this.Tiles[lv_k].group.add(this.Tiles[lv_k].sprite);
	  this.Tiles[lv_k].group.MouseDragTile = false;
	  this.Tiles[lv_k].sprite.inputEnabled = true;
	  this.Tiles[lv_k].group.onChildInputDown.add(this.m_onMouseDown_Tile, this.Tiles[lv_k].group);
	  this.Tiles[lv_k].group.onChildInputUp.add(this.m_onMouseUp_Tile, this.Tiles[lv_k].group);
	  this.Tiles[lv_k].group.visible = false;
	  this.Parent.group.add(this.Tiles[lv_k].group);
	}
  
  
}




//
// **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY **** CODY ****
//
//-------------------------------------------------------------------------------------------------------------------
function CodyTile()
{
  // shape определяет форму каждой грани Tile:
  //  0 - плоская форма
  //  1 - выпуклая форма
  // -1 - впуклая форма
  this.shape = {
	            top: undefined,
				right: undefined,
				bottom: undefined,
				left: undefined
               };
			   
  this.points = {
	             top_x: undefined,
				 top_y: undefined,
				 right_x: undefined,
				 right_y: undefined,
				 bottom_x: undefined,
				 bottom_y: undefined,
				 left_x: undefined,
				 left_y: undefined
                };
			   
  // хранит номера соседей
  this.neighbour = {
	                top: -1,
				    right: -1,
				    bottom: -1,
				    left: -1
                   };
  // хранит ссылки на встреченных соседей
  this.cf_neighbour = {
	                   top: 0,
				       right: 0,
			           bottom: 0,
			           left: 0
                      };
			   
  this.neighbourCounter = 0;
				
  // маска, которая скроет лишнее у Tile
  this.mask = undefined;
  
  // bitmap части исходной картинки
  this.bmp = undefined;
  
  this.sprite = undefined;
  
  this.group = undefined;
  
  this.hasDragged = 0;
  
  
  //- ********************************************************************************************************* -
  this.m_ClearProperties = function()
  {
    this.shape.top = undefined;
    this.shape.right = undefined;
    this.shape.bottom = undefined;
    this.shape.left = undefined;
    //
	this.points.top_x = undefined;
	this.points.top_y = undefined;
	this.points.right_x = undefined;
	this.points.right_y = undefined;
	this.points.bottom_x = undefined;
	this.points.bottom_y = undefined;
	this.points.left_x = undefined;
	this.points.left_y = undefined;
	//
	this.neighbour.top = -1;
	this.neighbour.right = -1;
	this.neighbour.bottom = -1;
	this.neighbour.left = -1;
	//
	this.cf_neighbour.top = 0;
	this.cf_neighbour.right = 0;
	this.cf_neighbour.bottom = 0;
	this.cf_neighbour.left = 0;	
    //
	this.neighbourCounter = 0;
	//
	this.hasDragged = 0;
	
  }
  //- ********************************************************************************************************* -
  this.m_Drag = function()
  {
    if(gv_LevelComplete)
	 return;
	
	this.hasDragged = 1;
	
	if(this.cf_neighbour.top !== 0)
	if(this.cf_neighbour.top.hasDragged === 0)
	{
	  
	  this.cf_neighbour.top.group.position.x = this.group.position.x;
	  if(this.shape.left !== this.cf_neighbour.top.shape.left)
	  {
	    if(this.cf_neighbour.top.shape.left === 1)
		  this.cf_neighbour.top.group.position.x -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
		else
		  this.cf_neighbour.top.group.position.x += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
      }

	  this.cf_neighbour.top.group.position.y = this.group.position.y - this.cf_neighbour.top.mask.getBounds().height + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio * gv_cScaleRatio;

	  this.cf_neighbour.top.m_Drag();
	}
	//
	if(this.cf_neighbour.bottom !== 0)
	if(this.cf_neighbour.bottom.hasDragged === 0)
	{
	  
	  this.cf_neighbour.bottom.group.position.x = this.group.position.x;
	  if(this.shape.left !== this.cf_neighbour.bottom.shape.left)
	  {
	    if(this.cf_neighbour.bottom.shape.left === 1)
		  this.cf_neighbour.bottom.group.position.x -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
		else
		  this.cf_neighbour.bottom.group.position.x += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
      }
	  
	  if(this.shape.bottom === 1)
	    this.cf_neighbour.bottom.group.position.y = (this.group.position.y + this.points.bottom_y * gv_scaleRatio * gv_cScaleRatio) - gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio * gv_cScaleRatio;
	  else
	    this.cf_neighbour.bottom.group.position.y = (this.group.position.y + this.points.bottom_y * gv_scaleRatio * gv_cScaleRatio);
	  
	  
	  this.cf_neighbour.bottom.m_Drag();
	}
	//
	if(this.cf_neighbour.left !== 0)
	if(this.cf_neighbour.left.hasDragged === 0)
	{
      this.cf_neighbour.left.group.position.x = this.group.position.x - this.cf_neighbour.left.mask.getBounds().width + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio * gv_cScaleRatio;
	  this.cf_neighbour.left.group.position.y = this.group.position.y;
	  if(this.shape.top !== this.cf_neighbour.left.shape.top)
	  {
	    if(this.cf_neighbour.left.shape.top === 1)
		  this.cf_neighbour.left.group.position.y -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
		else
		  this.cf_neighbour.left.group.position.y += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
      }
	  
	  this.cf_neighbour.left.m_Drag();
	}
	//
	if(this.cf_neighbour.right !== 0)
	if(this.cf_neighbour.right.hasDragged === 0)
	{
	  if(this.shape.right === 1)
	    this.cf_neighbour.right.group.position.x = (this.group.position.x + this.points.right_x * gv_scaleRatio * gv_cScaleRatio) - gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio * gv_cScaleRatio;
	  else
	    this.cf_neighbour.right.group.position.x = (this.group.position.x + this.points.right_x * gv_scaleRatio * gv_cScaleRatio);
	  
	  this.cf_neighbour.right.group.position.y = this.group.position.y;
	  if(this.shape.top !== this.cf_neighbour.right.shape.top)
	  {
	    if(this.cf_neighbour.right.shape.top === 1)
		  this.cf_neighbour.right.group.position.y -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
		else
		  this.cf_neighbour.right.group.position.y += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio * gv_cScaleRatio;
      }
	  
	  this.cf_neighbour.right.m_Drag();
	}
	
	this.hasDragged = 0;
  }
  //- ********************************************************************************************************* -
  
  
}
//-------------------------------------------------------------------------------------------------------------------
// fp_GameScene - указатель на игровое пространство, игровую сцену
function CodyPuzzle(fp_GameScene, fp_Parent, fp_TileWidth, fp_TileHeight)
{
  var lv_k;
  this.GameScene = fp_GameScene;
  this.TileWidth = fp_TileWidth;
  this.TileHeight = fp_TileHeight;
  //this.GameScene.load.image('WholeImage', ('content/img/' + fp_ImageName) );
	
  this.Parent = fp_Parent;
	
  // округление при делении не требуется, т.к. размеры картинки и размеры куска пазла подбираются соответствующим образом
  this.wTileQuantity = gc_ImageWidth/this.TileWidth;// w - Width (количество частей пазла по ширине)
  this.hTileQuantity = gc_ImageHeight/this.TileHeight;// h -Heigth (количество частей пазла по высоте)
	
  this.TileMargin_b = 33;// big
  this.TileMargin_s = 15;// small
  this.TileMargin_c = 4;// correction
  this.TileMargin_sb = this.TileMargin_s + this.TileMargin_b;

	
	
	
   this.m_onMouseDown_Tile = function(fp_Tile, fp_Pointer)
   {
     if(gv_LevelComplete)
	   return;

	  var lv_k;
	  
	  fp_Tile.parent.MouseDragTile = true;
	  fp_Tile.parent.mP = fp_Pointer;
	  fp_Tile.parent.mX = fp_Pointer.positionDown.x;
	  fp_Tile.parent.mY = fp_Pointer.positionDown.y;

	  //alert("selected");
   }
	
	
   this.m_onMouseUp_Tile = function(fp_Tile, fp_Pointer)
   {
	  fp_Tile.parent.MouseDragTile = false;
   }
	
	
	
  
  //- ********************************************************************************************************* -
  this.m_CreatePuzzle = function(fp_ImageName)
  {
	

	

    this.ImageName = fp_ImageName;
	this.m_CreateTiles();

  }
  
  //- ********************************************************************************************************* -
  this.m_CreateTiles = function()  
  {
	var lv_ix, lv_iy, lv_k;
	var lv_rect;
	var lv_cx;
	var lv_cy = new Array();
	var lv_cw, lv_ch;
	var lv_x1, lv_y1;
	var lv_bounds;
	
	var lv_crx, lv_cry, lv_cri;
	
	  
	lv_k = 0;
	for(lv_iy = 0; lv_iy < this.hTileQuantity; lv_iy++)
	for(lv_cx = 0, lv_ix = 0; lv_ix < this.wTileQuantity; lv_ix++)
	{
	  // определяем shape
	  this.m_getShape(lv_k, lv_ix, lv_iy);


	  
    //this.Tiles[lv_k].mask = this.GameScene.add.graphics(0, 0);
	  this.m_MakeMask(lv_ix, lv_iy, lv_k, this.Tiles[lv_k].shape);

	  
	  lv_cw = this.TileWidth;
	  if(this.Tiles[lv_k].shape.left === 1)
	  {
	    lv_cx -= (this.TileMargin_sb);
	    lv_cw += this.TileMargin_b;
	  }
	  else if(this.Tiles[lv_k].shape.left === -1)
	  {
	    lv_cx -= (this.TileMargin_sb);
	    lv_cw += this.TileMargin_s;
	  }
	  //
	  if(this.Tiles[lv_k].shape.right === 1)
		lv_cw += this.TileMargin_b;
	  else if(this.Tiles[lv_k].shape.right === -1)
	    lv_cw += this.TileMargin_s;
      //
	  //
	  lv_ch = this.TileHeight;
	  if(lv_iy === 0)
	    lv_cy[lv_ix] = 0;
	  else
	    lv_cy[lv_ix] += this.Tiles[(lv_iy - 1)*this.wTileQuantity + lv_ix].mask.getBounds().height;
	  if(this.Tiles[lv_k].shape.top === 1)
	  {
	    lv_cy[lv_ix] -= (this.TileMargin_sb);
	    lv_ch += this.TileMargin_b;
	  }
	  else if(this.Tiles[lv_k].shape.top === -1)
	  {
	    lv_cy[lv_ix] -= (this.TileMargin_sb);
	    lv_ch += this.TileMargin_s;
	  }
	  //
	  if(this.Tiles[lv_k].shape.bottom === 1)
		lv_ch += this.TileMargin_b;
	  else if(this.Tiles[lv_k].shape.bottom === -1)
	    lv_ch += this.TileMargin_s;
	  

	  

	  lv_rect = new Phaser.Rectangle(lv_cx, lv_cy[lv_ix], lv_cw, lv_ch);
	  lv_cx += lv_cw;
	  //lv_cy += lv_ch;
	
	  //this.Tiles[lv_k].sprite.mask = null;
	  this.Tiles[lv_k].bmp.clear();
	  this.Tiles[lv_k].bmp.copyRect(this.ImageName, lv_rect, 0, 0);
	  



	//this.Tiles[lv_k].sprite.mask = this.Tiles[lv_k].mask;
	//this.Tiles[lv_k].group.add(this.Tiles[lv_k].mask);
	//this.Tiles[lv_k].mask.inputEnabled = true;
	  

////////////////
	  this.Tiles[lv_k].group = this.GameScene.game.add.group();//I
	  this.Tiles[lv_k].group.add(this.Tiles[lv_k].sprite);//I
	  //
	  //this.Tiles[lv_k].mask = this.GameScene.add.graphics(0, 0);
	  this.Tiles[lv_k].sprite.mask = this.Tiles[lv_k].mask;//I
	  this.Tiles[lv_k].group.add(this.Tiles[lv_k].mask);//I
	  this.Tiles[lv_k].mask.inputEnabled = true;//I
	  //
	  this.Parent.group.add(this.Tiles[lv_k].group);//I
	  //
	  this.Tiles[lv_k].group.MouseDragTile = false;//I
	  this.Tiles[lv_k].group.onChildInputDown.add(this.m_onMouseDown_Tile, this.Tiles[lv_k].group);//I
	  this.Tiles[lv_k].group.onChildInputUp.add(this.m_onMouseUp_Tile, this.Tiles[lv_k].group);//I
////////////////
	  
	  this.Tiles[lv_k].group.position.x = (lv_ix*(this.TileWidth * gv_scaleRatio * gv_cScaleRatio + 130 * gv_scaleRatio * gv_cScaleRatio) + 10 * gv_scaleRatio * gv_cScaleRatio) + gv_CodyPuzzle_iX;
	  this.Tiles[lv_k].group.position.y = (lv_iy*(this.TileHeight * gv_scaleRatio * gv_cScaleRatio + 130 * gv_scaleRatio * gv_cScaleRatio) + gv_CodyPuzzle_iY);


	  lv_bounds = this.Tiles[lv_k].mask.getBounds();
	  this.Tiles[lv_k].mask.position.x = Math.abs(lv_bounds.x);
	  this.Tiles[lv_k].mask.position.y = Math.abs(lv_bounds.y);
	  //
	  this.Tiles[lv_k].sprite.position.x = 0;
	  this.Tiles[lv_k].sprite.position.y = 0;
	  
	  
	  this.Tiles[lv_k].group.mX = 0;
	  this.Tiles[lv_k].group.mY = 0;
	  this.Tiles[lv_k].group.TileNum = lv_k;
	  this.Tiles[lv_k].group.mP = 0;

	  this.Parent.windowMask.visible = true;
	  this.Tiles[lv_k].group.mask = this.Parent.windowMask;
	  
	  
	  //gv_scaleRatio = 0.3;//0D! //Q?
      this.Tiles[lv_k].group.scale.setTo(gv_scaleRatio * gv_cScaleRatio, gv_scaleRatio * gv_cScaleRatio);//0D! //Q?
	  
	  
	///////
    /*
	this.Tiles[lv_k].mask.lineStyle(1, 0xFFFFFF, 1);//1D!
	
	
	lv_crx = 0;
	lv_cry = 0;
	//
    this.Tiles[lv_k].mask.moveTo(lv_crx, lv_cry);
    this.Tiles[lv_k].mask.lineTo(lv_crx + 10, lv_cry);
	//
    this.Tiles[lv_k].mask.moveTo(lv_crx, lv_cry);
    this.Tiles[lv_k].mask.lineTo(lv_crx, lv_cry + 10);
	
	
	
	
	lv_crx = this.TileWidth/2;//(lv_bounds.width)/2 + lv_bounds.x;
	lv_cry = lv_bounds.height + lv_bounds.y;
	
    this.Tiles[lv_k].mask.moveTo(lv_crx, lv_cry);
    this.Tiles[lv_k].mask.lineTo(lv_crx + 10, lv_cry);
	//
    this.Tiles[lv_k].mask.moveTo(lv_crx, lv_cry);
    this.Tiles[lv_k].mask.lineTo(lv_crx, lv_cry + 10);
	*/
    ///////
	  
	  lv_k++;
	}
	
	  
	for(lv_k = 0, lv_iy = 0; lv_iy < this.hTileQuantity; lv_iy++)
	for(lv_ix = 0; lv_ix < this.wTileQuantity; lv_ix++)
	{
	  this.Tiles[lv_k].neighbour = this.m_getNeighbours(this.Tiles[lv_k], lv_ix, lv_iy);
	  this.Tiles[lv_k].points = this.m_DefinePoints(this.Tiles[lv_k]);
	  this.Tiles[lv_k].group.visible = true;
	  lv_k++;
	}
	
	this.m_MixTiles();

  }
  //- ********************************************************************************************************* -
  this.m_MixTiles = function()
  {
    
    
	var lv_k, lv_rk;
    var lv_r;
	var lv_px, lv_py;
	var lv_repeat;
	for(lv_repeat = 0; lv_repeat < 6; lv_repeat++)
	for(lv_k = 0; lv_k < this.Tiles.length; lv_k++)
	{
	  lv_rk = Math.round(Math.random() * 100);
	  if(lv_rk > (this.Tiles.length - 1))
	  {
	    lv_r = (Math.random() >= 0.5)?1:0;
		lv_rk = 5 + lv_r;
	  }
	  
	  lv_px = this.Tiles[lv_k].group.position.x;
	  this.Tiles[lv_k].group.position.x = this.Tiles[lv_rk].group.position.x;
	  this.Tiles[lv_rk].group.position.x = lv_px;
	  
	  lv_py = this.Tiles[lv_k].group.position.y;
	  this.Tiles[lv_k].group.position.y = this.Tiles[lv_rk].group.position.y;
	  this.Tiles[lv_rk].group.position.y = lv_py;
	
	}
	
	
	/*
	var lv_ix, lv_iy;
	var lv_bix, lv_biy;
	var lv_px, lv_py;
	var lv_k, lv_ck;
	var lv_c;
	var lv_r;
	var lv_repeatAmount;

    lv_repeatAmount = 200;
	
	lv_ck = this.Tiles.length - 1;
	lv_ix = this.wTileQuantity - 1;
	lv_iy = this.hTileQuantity - 1;
	for(lv_c = 0; lv_c < lv_repeatAmount; lv_c++)
	{
	  lv_bix = lv_ix;
	  lv_biy = lv_iy;
	  lv_r = (Math.random() >= 0.5)?1:0;// 0 - ось X; 0 - ось Y
	  if(lv_r === 0)
	    lv_k = lv_iy*this.wTileQuantity + (lv_ix + 1), // следующий элемент по оси X
		lv_bix = lv_ix + 1;
	  else
	    lv_k = (lv_iy + 1)*this.wTileQuantity + lv_ix, // следующий элемент по оси Y
		lv_biy = lv_iy + 1;
		
	  if((lv_k < 0) || (lv_k >= this.Tiles.length))
	  {
	    if(lv_r === 0)
	      lv_k = lv_iy*this.wTileQuantity + (lv_ix - 1), // предыдущий элемент по оси X
		  lv_bix = lv_ix - 1;
	    else
	      lv_k = (lv_iy - 1)*this.wTileQuantity + lv_ix, // предыдущий элемент по оси Y
		  lv_biy = lv_iy - 1;
	  }
	  lv_ix = lv_bix;
	  lv_iy = lv_biy;
	  
	  
	  lv_px = this.Tiles[lv_ck].group.position.x;
	  this.Tiles[lv_ck].group.position.x = this.Tiles[lv_k].group.position.x;
	  this.Tiles[lv_k].group.position.x = lv_px;
	  
	  lv_py = this.Tiles[lv_ck].group.position.y;
	  this.Tiles[lv_ck].group.position.y = this.Tiles[lv_k].group.position.y;
	  this.Tiles[lv_k].group.position.y = lv_py;
	  lv_ck = lv_k;
	  
	  //this.m_onMouseDown_Tile(this.Tiles[lv_k].sprite);
	  
	}*/
	

  
  }
  //- ********************************************************************************************************* -
  this.m_DefinePoints = function(fp_Tile)
  {
    var lv_points = {};
	//var lv_width2, lv_height2;
	//var lv_bounds;
	var lv_bounds = fp_Tile.mask.getBounds();
	
	//
	// Left
    if(fp_Tile.shape.left === -1)
	  lv_points.left_x = (this.TileMargin_sb);
	else
      lv_points.left_x = 0;
    //
	lv_points.left_y = this.TileHeight/2;
	if(fp_Tile.shape.top === 1)
	  lv_points.left_y += this.TileMargin_b;
	//
	// Right
	if(fp_Tile.shape.right === -1)
	  lv_points.right_x = lv_bounds.width - (this.TileMargin_sb);
	else
	  lv_points.right_x = lv_bounds.width;
	//
	lv_points.right_y = lv_points.left_y;
	//
	// Top
	lv_points.top_x = this.TileWidth/2;
	if(fp_Tile.shape.left === 1)
	  lv_points.top_x += this.TileMargin_b;
	//
	if(fp_Tile.shape.top === -1)
	  lv_points.top_y = (this.TileMargin_sb);
	else
	  lv_points.top_y = 0;
	//
	// Bottom
	lv_points.bottom_x = lv_points.top_x;
	//
	if(fp_Tile.shape.bottom === -1)
	  lv_points.bottom_y = lv_bounds.height - (this.TileMargin_sb);
	else
	  lv_points.bottom_y = lv_bounds.height;


	return lv_points;
  }
  //- ********************************************************************************************************* -
  this.m_getNeighbours = function(fp_Tile, fp_ix, fp_iy)
  {
	var lv_neighbour = {};
	
	// console.log("fp_ix = ", fp_ix, "; fp_iy = ", fp_iy);
	// if( (fp_ix === 2) && (fp_ix === 1) )
	  // console.log("Hello!");
	
	if(fp_ix === 0)
	{
	  lv_neighbour.left = -1;
	  lv_neighbour.right = fp_iy*this.wTileQuantity + (fp_ix + 1);//this.Tiles[fp_iy*this.wTileQuantity + (fp_ix + 1)];// следующий элемент по оси X
	  fp_Tile.neighbourCounter += 1;
	}
    else if(fp_ix === (this.wTileQuantity - 1))
	{
	  lv_neighbour.right = -1;
	  lv_neighbour.left = fp_iy*this.wTileQuantity + (fp_ix - 1);//this.Tiles[fp_iy*this.wTileQuantity + (fp_ix - 1)];// предыдущий элемент по оси X
	  fp_Tile.neighbourCounter += 1;
	}
    else
	{
      lv_neighbour.right = fp_iy*this.wTileQuantity + (fp_ix + 1);//this.Tiles[fp_iy*this.wTileQuantity + (fp_ix + 1)];// следующий элемент по оси X
	  lv_neighbour.left = fp_iy*this.wTileQuantity + (fp_ix - 1);//this.Tiles[fp_iy*this.wTileQuantity + (fp_ix - 1)];// предыдущий элемент по оси X
	  fp_Tile.neighbourCounter += 2;
	}
  

	if(fp_iy === 0)
	{
	  lv_neighbour.top = -1;
	  lv_neighbour.bottom = (fp_iy + 1)*this.wTileQuantity + fp_ix;//this.Tiles[(fp_iy + 1)*this.wTileQuantity + fp_ix];// следующий элемент по оси Y
	  fp_Tile.neighbourCounter += 1;
	}
    else if(fp_iy === (this.hTileQuantity - 1))
	{
	  lv_neighbour.bottom = -1;
	  lv_neighbour.top = (fp_iy - 1)*this.wTileQuantity + fp_ix;//this.Tiles[(fp_iy - 1)*this.wTileQuantity + fp_ix];// предыдущий элемент по оси Y
	  fp_Tile.neighbourCounter += 1;
	}
    else
	{
      lv_neighbour.bottom = (fp_iy + 1)*this.wTileQuantity + fp_ix;//this.Tiles[(fp_iy + 1)*this.wTileQuantity + fp_ix];// следующий элемент по оси Y
	  lv_neighbour.top = (fp_iy - 1)*this.wTileQuantity + fp_ix;//this.Tiles[(fp_iy - 1)*this.wTileQuantity + fp_ix];// предыдущий элемент по оси Y
	  fp_Tile.neighbourCounter += 2;
	}

	return lv_neighbour;
  }
  //- ********************************************************************************************************* -
  this.m_getShape = function(fp_k, fp_ix, fp_iy)
  {
	//var lv_shape = {};
	
	// console.log("fp_ix = ", fp_ix, "; fp_iy = ", fp_iy);
	// if( (fp_ix === 2) && (fp_ix === 1) )
	  // console.log("Hello!");
	
	if(fp_ix === 0)
	{
	  this.Tiles[fp_k].shape.left = 0;
	  this.Tiles[fp_k].shape.right = this.m_getRandomShapeValue();// right присваиваем случайное значение
	}
    else if(fp_ix === (this.wTileQuantity - 1))
	{
	  this.Tiles[fp_k].shape.right = 0;
	  this.Tiles[fp_k].shape.left = -this.Tiles[fp_iy*this.wTileQuantity + (fp_ix - 1)].shape.right;// left присваиваем значение предыдущего элемента по оси X
	}
    else
	{
      this.Tiles[fp_k].shape.right = this.m_getRandomShapeValue();// right присваиваем случайное значение
	  this.Tiles[fp_k].shape.left = -this.Tiles[fp_iy*this.wTileQuantity + (fp_ix - 1)].shape.right;// left присваиваем значение предыдущего элемента по оси X
	}
  

	if(fp_iy === 0)
	{
	  this.Tiles[fp_k].shape.top = 0;
	  this.Tiles[fp_k].shape.bottom = this.m_getRandomShapeValue();// bottom присваиваем случайное значение
	}
    else if(fp_iy === (this.hTileQuantity - 1))
	{
	  this.Tiles[fp_k].shape.bottom = 0;
	  this.Tiles[fp_k].shape.top = -this.Tiles[(fp_iy - 1)*this.wTileQuantity + fp_ix].shape.bottom;// top присваиваем значение предыдущего элемента по оси Y
	}
    else
	{
      this.Tiles[fp_k].shape.bottom = this.m_getRandomShapeValue();// bottom присваиваем случайное значение
	  this.Tiles[fp_k].shape.top = -this.Tiles[(fp_iy - 1)*this.wTileQuantity + fp_ix].shape.bottom;// top присваиваем значение предыдущего элемента по оси Y
	}

	//return lv_shape;
  }
  //- ********************************************************************************************************* -
  this.m_getRandomShapeValue = function()
  {
    return Math.pow(-1, Math.floor(Math.random() * 2));
  }
  //- ********************************************************************************************************* -
  this.m_MakeMask = function(fp_ix, fp_iy, fp_k, fp_shape)
  {
	//var lv_mask;
	var lv_wTileRatio;
	var lv_hTileRatio;
	var lv_topLeftEdge;
	var lv_topRightEdge;
	var lv_bottomRightEdge;
	var lv_bottomLeftEdge;
	var lv_p1 = new myLib.Point(0, 0);
	var lv_p2 = new myLib.Point(0, 0);
	var lv_p3 = new myLib.Point(0, 0);
	var lv_i;
	
    var lv_curvyCoords = [
                          0, 0, 35, 15, 37, 5,
                          37, 5, 40, 0, 38, -5,
                          38, -5, 20, -20, 50, -20,
                          50, -20, 80, -20, 62, -5,
                          62, -5, 60, 0, 63, 5,
                          63, 5, 65, 15, 100, 0
                         ];

	
    this.Tiles[fp_k].mask = this.GameScene.add.graphics(0, 0);
	// this.Tiles[fp_k].mask.clear();
	// this.Tiles[fp_k].mask.updateLocalBounds();
    this.Tiles[fp_k].mask.lineStyle(1, 0xFFFFFF, 1);
	this.Tiles[fp_k].mask.beginFill(0xFF3300);

    lv_wTileRatio = this.TileWidth / 100.0;
	lv_hTileRatio = this.TileHeight / 100.0;

    //Top
    lv_topLeftEdge = new myLib.Point(0, 0);//new myLib.Point(-4, 4);
    this.Tiles[fp_k].mask.moveTo(lv_topLeftEdge.x, lv_topLeftEdge.y);
    for(lv_i = 0; lv_i < lv_curvyCoords.length / 6; lv_i++)
    {
	  lv_p1 = lv_topLeftEdge.add( new myLib.Point(lv_curvyCoords[lv_i * 6 + 0] * lv_wTileRatio, fp_shape.top * lv_curvyCoords[lv_i * 6 + 1] * lv_wTileRatio) );									 
	  lv_p2 = lv_topLeftEdge.add( new myLib.Point(lv_curvyCoords[lv_i * 6 + 2] * lv_wTileRatio, fp_shape.top * lv_curvyCoords[lv_i * 6 + 3] * lv_wTileRatio) );
	  lv_p3 = lv_topLeftEdge.add( new myLib.Point(lv_curvyCoords[lv_i * 6 + 4] * lv_wTileRatio, fp_shape.top * lv_curvyCoords[lv_i * 6 + 5] * lv_wTileRatio) );
      this.Tiles[fp_k].mask.bezierCurveTo(lv_p1.x, lv_p1.y, lv_p2.x, lv_p2.y, lv_p3.x, lv_p3.y);
    }
	
    //Right
	lv_topRightEdge = lv_topLeftEdge.add( new myLib.Point(lv_p3.x, 0) );
    for(lv_i = 0; lv_i < lv_curvyCoords.length / 6; lv_i++)
	{
	  lv_p1 = lv_topRightEdge.add( new myLib.Point(-fp_shape.right * lv_curvyCoords[lv_i * 6 + 1] * lv_hTileRatio, lv_curvyCoords[lv_i * 6 + 0] * lv_hTileRatio) );
      lv_p2 = lv_topRightEdge.add( new myLib.Point(-fp_shape.right * lv_curvyCoords[lv_i * 6 + 3] * lv_hTileRatio, lv_curvyCoords[lv_i * 6 + 2] * lv_hTileRatio) );
      lv_p3 = lv_topRightEdge.add( new myLib.Point(-fp_shape.right * lv_curvyCoords[lv_i * 6 + 5] * lv_hTileRatio, lv_curvyCoords[lv_i * 6 + 4] * lv_hTileRatio) );
      this.Tiles[fp_k].mask.bezierCurveTo(lv_p1.x, lv_p1.y, lv_p2.x, lv_p2.y, lv_p3.x, lv_p3.y);
    }
	
    //Bottom
	lv_bottomRightEdge = lv_topRightEdge.add( new myLib.Point(0, lv_p3.y) );
    for(lv_i = 0; lv_i < lv_curvyCoords.length / 6; lv_i++)
    {
	  lv_p1 = lv_bottomRightEdge.sub( new myLib.Point(lv_curvyCoords[lv_i * 6 + 0] * lv_wTileRatio, fp_shape.bottom * lv_curvyCoords[lv_i * 6 + 1] * lv_wTileRatio) );
      lv_p2 = lv_bottomRightEdge.sub( new myLib.Point(lv_curvyCoords[lv_i * 6 + 2] * lv_wTileRatio, fp_shape.bottom * lv_curvyCoords[lv_i * 6 + 3] * lv_wTileRatio) );
      lv_p3 = lv_bottomRightEdge.sub( new myLib.Point(lv_curvyCoords[lv_i * 6 + 4] * lv_wTileRatio, fp_shape.bottom * lv_curvyCoords[lv_i * 6 + 5] * lv_wTileRatio) );
      this.Tiles[fp_k].mask.bezierCurveTo(lv_p1.x, lv_p1.y, lv_p2.x, lv_p2.y, lv_p3.x, lv_p3.y);
    }
	
	//Left
	lv_bottomLeftEdge = lv_bottomRightEdge.sub( new Phaser.Point(lv_p3.y, 0) );
    for(lv_i = 0; lv_i < lv_curvyCoords.length / 6; lv_i++)
	{
	  lv_p1 = lv_bottomLeftEdge.sub( new myLib.Point(-fp_shape.left * lv_curvyCoords[lv_i * 6 + 1] * lv_hTileRatio, lv_curvyCoords[lv_i * 6 + 0] * lv_hTileRatio) );
      lv_p2 = lv_bottomLeftEdge.sub( new myLib.Point(-fp_shape.left * lv_curvyCoords[lv_i * 6 + 3] * lv_hTileRatio, lv_curvyCoords[lv_i * 6 + 2] * lv_hTileRatio) );
      lv_p3 = lv_bottomLeftEdge.sub( new myLib.Point(-fp_shape.left * lv_curvyCoords[lv_i * 6 + 5] * lv_hTileRatio, lv_curvyCoords[lv_i * 6 + 4] * lv_hTileRatio) );
      this.Tiles[fp_k].mask.bezierCurveTo(lv_p1.x, lv_p1.y, lv_p2.x, lv_p2.y, lv_p3.x, lv_p3.y);
    }
	
	this.Tiles[fp_k].mask.endFill();
	// this.Tiles[fp_k].mask.updateLocalBounds();
	// this.Tiles[fp_k].mask.update();
  }
  //- ********************************************************************************************************* -
  this.m_HideTiles = function()
  {
    var lv_k;
	
   this.Parent.windowMask.visible = false;
	
	for(lv_k = 0; lv_k < this.Tiles.length; lv_k++)
	{
      this.Tiles[lv_k].m_ClearProperties();
	  if(typeof this.Tiles[lv_k].group != 'undefined')
	  this.Tiles[lv_k].group.visible = false;
	}
  }
  
  
  
  this.Tiles = [];
  for(lv_k = 0; lv_k < (this.wTileQuantity * this.hTileQuantity); lv_k++)
  {
	// создаем экземпляр класса CodyTile
	this.Tiles[lv_k] = new CodyTile();//I
	
	
	this.Tiles[lv_k].bmp = this.GameScene.make.bitmapData( (this.TileWidth + 2*this.TileMargin_sb), (this.TileHeight + 2*this.TileMargin_sb) );//I
	this.Tiles[lv_k].sprite = this.GameScene.add.sprite(0, 0, this.Tiles[lv_k].bmp);//I
    //
	// this.Tiles[lv_k].group = this.GameScene.game.add.group();//I
	// this.Tiles[lv_k].group.add(this.Tiles[lv_k].sprite);//I
	// //
    // //this.Tiles[lv_k].mask = this.GameScene.add.graphics(0, 0);
	// this.Tiles[lv_k].sprite.mask = this.Tiles[lv_k].mask;//I
	// this.Tiles[lv_k].group.add(this.Tiles[lv_k].mask);//I
	// this.Tiles[lv_k].mask.inputEnabled = true;//I
	// //
	// this.Parent.group.add(this.Tiles[lv_k].group);//I
	// //
	// this.Tiles[lv_k].group.MouseDragTile = false;//I
	// this.Tiles[lv_k].group.onChildInputDown.add(this.m_onMouseDown_Tile, this.Tiles[lv_k].group);//I
	// this.Tiles[lv_k].group.onChildInputUp.add(this.m_onMouseUp_Tile, this.Tiles[lv_k].group);//I
	// //
	// this.Tiles[lv_k].group.visible = false;//I
  }
  
}























































