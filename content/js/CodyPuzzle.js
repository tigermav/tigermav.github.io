
//gv_THIS = this;

//-------------------------------------------------------------------------------------------------------------------
gv_MyGame.CodyPuzzleGame = function(fp_Game)
{
	//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// this.scale.pageAlignHorizontally = true;
	// this.scale.pageAlignVertically = true;
	
	
};
//-------------------------------------------------------------------------------------------------------------------
gv_MyGame.CodyPuzzleGame.prototype = {
	
	
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
	  
	  this.CodyPuzzle = new CodyPuzzle(this, lv_ImageName, lv_TileWidth, lv_TileHeight);
	  gv_GLOBAL_CODY_THIS = this;
	  
	  
	  
	  
	},
	//- ********************************************************************************************************* -
	create: function(){
      

	  this.CodyPuzzle.m_CreatePuzzle();

	  
	},
	//- ********************************************************************************************************* -
    update: function()
	{
	  
	  var lv_dX, lv_dY, lv_k;
	  var lv_dHit = 20 * gv_scaleRatio;
	  var lv_CurTile;
	  var lv_NTile;// Neighbour Tile
	  var lv_NullCounter = 0;
	  
	  for(lv_k = 0; lv_k < this.CodyPuzzle.Tiles.length; lv_k++)
	  {
	    lv_CurTile = this.CodyPuzzle.Tiles[lv_k];
		
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
		    lv_NTile = this.CodyPuzzle.Tiles[ lv_CurTile.neighbour.left ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.left_x * gv_scaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.right_x * gv_scaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.left_x * gv_scaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.right_x * gv_scaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.left_y * gv_scaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.right_y * gv_scaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.left_y * gv_scaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.right_y * gv_scaleRatio - lv_dHit)   )
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
		    lv_NTile = this.CodyPuzzle.Tiles[ lv_CurTile.neighbour.right ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.right_x * gv_scaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.left_x * gv_scaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.right_x * gv_scaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.left_x * gv_scaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.right_y * gv_scaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.left_y * gv_scaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.right_y * gv_scaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.left_y * gv_scaleRatio - lv_dHit)   )
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
		    lv_NTile = this.CodyPuzzle.Tiles[ lv_CurTile.neighbour.top ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.top_x * gv_scaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.bottom_x * gv_scaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.top_x * gv_scaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.bottom_x * gv_scaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.top_y * gv_scaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.bottom_y * gv_scaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.top_y * gv_scaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.bottom_y * gv_scaleRatio - lv_dHit)   )
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
		    lv_NTile = this.CodyPuzzle.Tiles[ lv_CurTile.neighbour.bottom ];
		    if(
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.bottom_x * gv_scaleRatio) <= (lv_NTile.group.position.x + lv_NTile.points.top_x * gv_scaleRatio + lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.x + lv_CurTile.points.bottom_x * gv_scaleRatio) >= (lv_NTile.group.position.x + lv_NTile.points.top_x * gv_scaleRatio - lv_dHit)   ) &&
			    (   (lv_CurTile.group.position.y + lv_CurTile.points.bottom_y * gv_scaleRatio) <= (lv_NTile.group.position.y + lv_NTile.points.top_y * gv_scaleRatio + lv_dHit)   ) &&
				(   (lv_CurTile.group.position.y + lv_CurTile.points.bottom_y * gv_scaleRatio) >= (lv_NTile.group.position.y + lv_NTile.points.top_y * gv_scaleRatio - lv_dHit)   )
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
	  
	  if(!gv_LevelComplete)
	  if(lv_NullCounter === this.CodyPuzzle.Tiles.length)
      {
	    gv_LevelComplete = 1;
		alert("Паззл собран");
	  }
	  
	  
		
	}
	//- ********************************************************************************************************* -

	
};
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
  this.m_Drag = function()
  {
    this.hasDragged = 1;
	
	if(this.cf_neighbour.top !== 0)
	if(this.cf_neighbour.top.hasDragged === 0)
	{
	  
	  this.cf_neighbour.top.group.position.x = this.group.position.x;
	  if(this.shape.left !== this.cf_neighbour.top.shape.left)
	  {
	    if(this.cf_neighbour.top.shape.left === 1)
		  this.cf_neighbour.top.group.position.x -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
		else
		  this.cf_neighbour.top.group.position.x += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
      }

	  this.cf_neighbour.top.group.position.y = this.group.position.y - this.cf_neighbour.top.mask.getBounds().height + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio;

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
		  this.cf_neighbour.bottom.group.position.x -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
		else
		  this.cf_neighbour.bottom.group.position.x += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
      }
	  
	  if(this.shape.bottom === 1)
	    this.cf_neighbour.bottom.group.position.y = (this.group.position.y + this.points.bottom_y * gv_scaleRatio) - gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio;
	  else
	    this.cf_neighbour.bottom.group.position.y = (this.group.position.y + this.points.bottom_y * gv_scaleRatio);
	  
	  
	  this.cf_neighbour.bottom.m_Drag();
	}
	//
	if(this.cf_neighbour.left !== 0)
	if(this.cf_neighbour.left.hasDragged === 0)
	{
      this.cf_neighbour.left.group.position.x = this.group.position.x - this.cf_neighbour.left.mask.getBounds().width + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio;
	  this.cf_neighbour.left.group.position.y = this.group.position.y;
	  if(this.shape.top !== this.cf_neighbour.left.shape.top)
	  {
	    if(this.cf_neighbour.left.shape.top === 1)
		  this.cf_neighbour.left.group.position.y -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
		else
		  this.cf_neighbour.left.group.position.y += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
      }
	  
	  this.cf_neighbour.left.m_Drag();
	}
	//
	if(this.cf_neighbour.right !== 0)
	if(this.cf_neighbour.right.hasDragged === 0)
	{
	  if(this.shape.right === 1)
	    this.cf_neighbour.right.group.position.x = (this.group.position.x + this.points.right_x * gv_scaleRatio) - gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_sb * gv_scaleRatio;
	  else
	    this.cf_neighbour.right.group.position.x = (this.group.position.x + this.points.right_x * gv_scaleRatio);
	  
	  this.cf_neighbour.right.group.position.y = this.group.position.y;
	  if(this.shape.top !== this.cf_neighbour.right.shape.top)
	  {
	    if(this.cf_neighbour.right.shape.top === 1)
		  this.cf_neighbour.right.group.position.y -= (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
		else
		  this.cf_neighbour.right.group.position.y += (gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_s + gv_GLOBAL_CODY_THIS.CodyPuzzle.TileMargin_c) * gv_scaleRatio;
      }
	  
	  this.cf_neighbour.right.m_Drag();
	}
	
	this.hasDragged = 0;
  }
  //- ********************************************************************************************************* -
  
  
}
//-------------------------------------------------------------------------------------------------------------------
// fp_GameScene - указатель на игровое пространство, игровую сцену
function CodyPuzzle(fp_GameScene, fp_ImageName, fp_TileWidth, fp_TileHeight)
{
  this.GameScene = fp_GameScene;
  this.TileWidth = fp_TileWidth;
  this.TileHeight = fp_TileHeight;
  this.GameScene.load.image('WholeImage', ('content/img/' + fp_ImageName) );
	

	
   this.m_onMouseDown_Tile = function(fp_Tile, fp_Pointer)
   {
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
  this.m_CreatePuzzle = function()
  {
	this.WholeImage = this.GameScene.add.image(100, 100, 'WholeImage');// this.WholeImage._frame.width
	this.WholeImage.visible = false;
	
	// округление при делении не требуется, т.к. размеры картинки и размеры куска пазла подбираются соответствующим образом
	this.wTileQuantity = this.WholeImage._frame.width/this.TileWidth;// w - Width (количество частей пазла по ширине)
	this.hTileQuantity = this.WholeImage._frame.height/this.TileHeight;// h -Heigth (количество частей пазла по высоте)
	
	this.TileMargin_b = 33;// big
	this.TileMargin_s = 15;// small
	this.TileMargin_c = 4;// correction
    this.TileMargin_sb = this.TileMargin_s + this.TileMargin_b;
	
	this.Tiles = [];

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
	  // создаем экземпляр класса CodyTile
	  this.Tiles[lv_k] = new CodyTile();
	  
	  // определяем shape
	  this.Tiles[lv_k].shape = this.m_getShape(lv_ix, lv_iy);

	  
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
	  

	  
	  this.Tiles[lv_k].bmp = this.GameScene.make.bitmapData(lv_cw, lv_ch);
	  lv_rect = new Phaser.Rectangle(lv_cx, lv_cy[lv_ix], lv_cw, lv_ch);
	  lv_cx += lv_cw;
	  //lv_cy += lv_ch;
	  
	  
	  

									 
	  this.Tiles[lv_k].bmp.copyRect('WholeImage', lv_rect, 0, 0);

	  
	  
	  this.Tiles[lv_k].sprite = this.GameScene.add.sprite(0, 0, this.Tiles[lv_k].bmp);// this.Tiles[lv_k].sprite = this.GameScene.add.sprite(lv_ix*(this.TileWidth), lv_iy*(this.TileHeight), this.Tiles[lv_k].bmp);
	  this.Tiles[lv_k].sprite.mask = this.Tiles[lv_k].mask;//0D!
	  
	  this.Tiles[lv_k].group = this.GameScene.game.add.group();
	  this.Tiles[lv_k].group.add(this.Tiles[lv_k].sprite);
	  this.Tiles[lv_k].group.add(this.Tiles[lv_k].mask);
	  this.Tiles[lv_k].group.position.x = (lv_ix*(this.TileWidth * gv_scaleRatio + 70 * gv_scaleRatio) + 10 * gv_scaleRatio);
	  this.Tiles[lv_k].group.position.y = (lv_iy*(this.TileHeight * gv_scaleRatio + 70 * gv_scaleRatio) + 0);


	  lv_bounds = this.Tiles[lv_k].mask.getBounds();
	  this.Tiles[lv_k].mask.position.x = Math.abs(lv_bounds.x);
	  this.Tiles[lv_k].mask.position.y = Math.abs(lv_bounds.y);
	  //
	  this.Tiles[lv_k].sprite.position.x = 0;
	  this.Tiles[lv_k].sprite.position.y = 0;
	  
	  this.Tiles[lv_k].mask.inputEnabled = true;
	  
	  this.Tiles[lv_k].group.mX = 0;
	  this.Tiles[lv_k].group.mY = 0;
	  this.Tiles[lv_k].group.TileNum = lv_k;
	  this.Tiles[lv_k].group.MouseDragTile = false;
	  this.Tiles[lv_k].group.mP = 0;
	  this.Tiles[lv_k].group.onChildInputDown.add(this.m_onMouseDown_Tile, this.Tiles[lv_k].group);
	  this.Tiles[lv_k].group.onChildInputUp.add(this.m_onMouseUp_Tile, this.Tiles[lv_k].group);

	  //gv_scaleRatio = 0.3;//0D! //Q?
      this.Tiles[lv_k].group.scale.setTo(gv_scaleRatio, gv_scaleRatio);//0D! //Q?
	  
	  
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
	  lv_k++;
	}
	  

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
  this.m_getShape = function(fp_ix, fp_iy)
  {
	var lv_shape = {};
	
	// console.log("fp_ix = ", fp_ix, "; fp_iy = ", fp_iy);
	// if( (fp_ix === 2) && (fp_ix === 1) )
	  // console.log("Hello!");
	
	if(fp_ix === 0)
	{
	  lv_shape.left = 0;
	  lv_shape.right = this.m_getRandomShapeValue();// right присваиваем случайное значение
	}
    else if(fp_ix === (this.wTileQuantity - 1))
	{
	  lv_shape.right = 0;
	  lv_shape.left = -this.Tiles[fp_iy*this.wTileQuantity + (fp_ix - 1)].shape.right;// left присваиваем значение предыдущего элемента по оси X
	}
    else
	{
      lv_shape.right = this.m_getRandomShapeValue();// right присваиваем случайное значение
	  lv_shape.left = -this.Tiles[fp_iy*this.wTileQuantity + (fp_ix - 1)].shape.right;// left присваиваем значение предыдущего элемента по оси X
	}
  

	if(fp_iy === 0)
	{
	  lv_shape.top = 0;
	  lv_shape.bottom = this.m_getRandomShapeValue();// bottom присваиваем случайное значение
	}
    else if(fp_iy === (this.hTileQuantity - 1))
	{
	  lv_shape.bottom = 0;
	  lv_shape.top = -this.Tiles[(fp_iy - 1)*this.wTileQuantity + fp_ix].shape.bottom;// top присваиваем значение предыдущего элемента по оси Y
	}
    else
	{
      lv_shape.bottom = this.m_getRandomShapeValue();// bottom присваиваем случайное значение
	  lv_shape.top = -this.Tiles[(fp_iy - 1)*this.wTileQuantity + fp_ix].shape.bottom;// top присваиваем значение предыдущего элемента по оси Y
	}

	return lv_shape;
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
	
  }
  
  
  
  
}


































































