
//gv_THIS = this;

//-------------------------------------------------------------------------------------------------------------------
gv_MyGame.ZackPuzzleGame = function(fp_Game)
{
	//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// this.scale.pageAlignHorizontally = true;
	// this.scale.pageAlignVertically = true;
	
	
};
//-------------------------------------------------------------------------------------------------------------------
gv_MyGame.ZackPuzzleGame.prototype = {
	
	
	//- ********************************************************************************************************* -
    init: function () {
	
	
	    var lv_Device = this.game.device;
	
        //this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.pageAlignHorisontally = true;
        //this.scale.pageAlignVertically = true;
        //this.scale.forcePortrait = true;
		
    },
	//- ********************************************************************************************************* -
	preload: function(){
      
	  this.game.stage.backgroundColor = '#ccddff';
	  //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	  //this.scale.pageAlignHorizontally = true;
	  //this.scale.pageAlignVertically = true;
	  
	  
	  var lv_ImageName = 'SLOZAC_01x26.png';
	  var lv_TileWidth = 160;
	  var lv_TileHeight = 160;
	  
	  this.ZackPuzzle = new ZackPuzzle(this, lv_ImageName, lv_TileWidth, lv_TileHeight);
	  gv_GLOBAL_ZACK_THIS = this;
	  
	  
	  
	  
	},
	//- ********************************************************************************************************* -
	create: function(){
      

	  this.ZackPuzzle.m_CreatePuzzle();

	  
	},
	//- ********************************************************************************************************* -
    update: function()
	{
	
	  if(!gv_LevelComplete)
	  if(gv_GLOBAL_ZACK_THIS.ZackPuzzle.m_LevelComlete())
	  {
	    gv_LevelComplete = 1;
	    alert("Level complete");
	  }
	
	
	
	  /*
	  var lv_dX, lv_dY, lv_k;
	  var lv_NewX, lv_NewY;
	  var lv_dHit = 20 * gv_scaleRatio;
	  var lv_CurTile;
	  var lv_NTile;// Neighbour Tile
	  var lv_NullCounter = 0;
	  
	  for(lv_k = 0; lv_k < this.ZackPuzzle.Tiles.length; lv_k++)
	  {
	    lv_CurTile = this.ZackPuzzle.Tiles[lv_k];
		
		if(lv_CurTile.group.MouseDragTile)
		{
		  lv_dX = lv_CurTile.group.mP.x - lv_CurTile.group.mX;//this.game.input.x
          lv_dY = lv_CurTile.group.mP.y - lv_CurTile.group.mY;
		  
		  if(lv_dX || lv_dY)
		  {
		  
		  
		  lv_NewX = lv_CurTile.group.position.x + lv_dX * (this.ZackPuzzle.TileWidth * gv_scaleRatio + this.ZackPuzzle.TileMargin_d);
		  lv_NewY = lv_CurTile.group.position.y + lv_dY * (this.ZackPuzzle.TileHeight * gv_scaleRatio + this.ZackPuzzle.TileMargin_d);
		  
		  //lv_NewX = lv_CurTile.group.position.x + lv_dX;
		  //lv_NewY = lv_CurTile.group.position.y + lv_dY;
		  
		  if(this.ZackPuzzle.m_Empty(lv_k, lv_NewX, lv_NewY))
		  {
            lv_CurTile.group.position.x = lv_NewX;
            lv_CurTile.group.position.y = lv_NewY;
			lv_CurTile.group.MouseDragTile = false;
		  }
		  
		   
		  }
		  
          lv_CurTile.group.mX = lv_CurTile.group.mP.x;
          lv_CurTile.group.mY = lv_CurTile.group.mP.y;
		  
		}

	  }
	  
	  if(!gv_LevelComplete)
	  if(lv_NullCounter === this.ZackPuzzle.Tiles.length)
      {
	    gv_LevelComplete = 1;
		alert("Паззл собран");
	  }
	  
	  */
		
	}
	//- ********************************************************************************************************* -

	
};
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
function ZackPuzzle(fp_GameScene, fp_ImageName, fp_TileWidth, fp_TileHeight)
{

  this.workArea = {
	               leftTop_x: undefined,
				   leftTop_y: undefined,
				   rightBottom_x: undefined,
				   rightBottom_y: undefined
                  };
				  

  this.GameScene = fp_GameScene;
  this.TileWidth = fp_TileWidth;
  this.TileHeight = fp_TileHeight;

   
   
  this.GameScene.load.image('WholeImage', ('content/img/' + fp_ImageName) );
   
   
   
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
	fp_Tile.parent.MouseDragTile = false;
  }
  //- ********************************************************************************************************* -
  this.m_CreatePuzzle = function()
  {
	this.WholeImage = this.GameScene.add.image(100, 100, 'WholeImage');// this.WholeImage._frame.width
	this.WholeImage.visible = false;
	
	// округление при делении не требуется, т.к. размеры картинки и размеры куска пазла подбираются соответствующим образом
	this.wTileQuantity = this.WholeImage._frame.width/this.TileWidth;// w - Width (количество частей пазла по ширине)
	this.hTileQuantity = this.WholeImage._frame.height/this.TileHeight;// h -Heigth (количество частей пазла по высоте)
	
	
    this.TileMargin_d = 10 * gv_scaleRatio;// distance
	
	this.TileMargin_dX = this.TileWidth * gv_scaleRatio + this.TileMargin_d;
	this.TileMargin_dY = this.TileHeight * gv_scaleRatio + this.TileMargin_d;
	
    this.workArea.leftTop_x = 10 * gv_scaleRatio;
    this.workArea.leftTop_y = 10 * gv_scaleRatio;
   
    this.workArea.rightBottom_x = (this.wTileQuantity)*(this.TileWidth  * gv_scaleRatio) + this.workArea.leftTop_x;
    this.workArea.rightBottom_y = (this.hTileQuantity)*(this.TileHeight * gv_scaleRatio) + this.workArea.leftTop_y;
	
	
	
	this.Tiles = [];

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
	  // создаем экземпляр класса ZackTile
	  this.Tiles[lv_k] = new ZackTile();
	  
	  this.Tiles[lv_k].bmp = this.GameScene.make.bitmapData(this.TileWidth, this.TileHeight);
	  lv_rect = new Phaser.Rectangle((lv_ix * this.TileWidth), (lv_iy * this.TileHeight), this.TileWidth, this.TileHeight);
	  this.Tiles[lv_k].bmp.copyRect('WholeImage', lv_rect, 0, 0);
	  this.Tiles[lv_k].sprite = this.GameScene.add.sprite(0, 0, this.Tiles[lv_k].bmp);
	  
	  this.Tiles[lv_k].group = this.GameScene.game.add.group();
	  this.Tiles[lv_k].group.add(this.Tiles[lv_k].sprite);
	  this.Tiles[lv_k].initPosition.x = lv_ix*(this.TileWidth  * gv_scaleRatio + this.TileMargin_d) + this.workArea.leftTop_x;
	  this.Tiles[lv_k].initPosition.y = lv_iy*(this.TileHeight * gv_scaleRatio + this.TileMargin_d) + this.workArea.leftTop_y;
      //
	  this.Tiles[lv_k].group.position.x = this.Tiles[lv_k].initPosition.x;
	  this.Tiles[lv_k].group.position.y = this.Tiles[lv_k].initPosition.y;
	  
	  
	  this.Tiles[lv_k].sprite.inputEnabled = true;
	  
	  this.Tiles[lv_k].group.mX = 0;
	  this.Tiles[lv_k].group.mY = 0;
	  this.Tiles[lv_k].group.TileNum = lv_k;
	  this.Tiles[lv_k].group.MouseDragTile = false;
	  this.Tiles[lv_k].group.mP = 0;
	  this.Tiles[lv_k].group.onChildInputDown.add(this.m_onMouseDown_Tile, this.Tiles[lv_k].group);
	  this.Tiles[lv_k].group.onChildInputUp.add(this.m_onMouseUp_Tile, this.Tiles[lv_k].group);

	  //gv_scaleRatio = 0.3;//0D! //Q?
      this.Tiles[lv_k].sprite.scale.setTo(gv_scaleRatio, gv_scaleRatio);//0D! //Q?

	  
	  lv_k++;
	  if(lv_k === (this.hTileQuantity * this.wTileQuantity - 1))
	    break;
	}	  

  }
  //- ********************************************************************************************************* -
  this.m_MixTiles = function()
  {
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
	
	if(gv_LevelDifficulty === 0)
	  lv_repeatAmount = 100;
	else
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
  
  
}


































































