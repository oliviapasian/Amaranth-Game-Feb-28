var screen = 0;

// Background Intro stuff
var fade = 0;
var fadeAmount = 1;
let bg;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;
let bg7;
let bgy = 0;

// Game pieces
let invisible_ground, ground, groundImg;
let monsterGroup,pegasus,pegasus_running,pegasusImage,medusa,medusa_running,medusaImage,cyclops,cyclops_running,cyclopsImage,minotaur,minotaur_running,minotaurImage;
let obstaclesGroup,obstacle1,obstacle2,obstacle3;
let gameOver,restart;

function preload(){

    // Load intro images
    bg = loadImage('amaranth game intro.jpg');
    bg2 = loadImage('amaranth game intro2.jpg');
    bg3 = loadImage('amaranth game intro3.jpg');
    bg4 = loadImage('amaranth game intro4.jpg');
    bg5 = loadImage('amaranth game intro5.jpg');
    bg6 = loadImage('amaranth game intro6.jpg');
    bg7 = loadImage('backgroundnew.png');

    // Game images/animations
    pegasusImage=loadImage("pegasus1.png");
    medusaImage=loadImage("medusa1.png");
    minotaurImage=loadImage("minotaur1.png");
    cyclopsImage=loadImage("cyclops1.png");
    pegasus_running=loadAnimation("pegasus1.png","pegasus2.png","pegasus2.png","pegasus1.png");
    pegasus_standing=loadAnimation("pegasus1.png");
    medusa_running=loadAnimation("medusa1.png","medusa2.png","medusa2.png","medusa1.png");
    medusa_standing=loadAnimation("medusa1.png");
    minotaur_running=loadAnimation("minotaur1.png","minotaur2.png","minotaur2.png","minotaur1.png");
    minotaur_standing=loadAnimation("minotaur1.png");
    cyclops_running=loadAnimation("cyclops1.png","cyclops2.png","cyclops2.png","cyclops1.png");
    cyclops_standing=loadAnimation("cyclops1.png");
    obstacle1=loadImage("object1.png");
    obstacle2=loadImage("object2.png");
    obstacle3=loadImage("object3.png");
    groundImg = loadImage("ground-image.png");
    
 
}

function setup(){
    world.gravity.y = 22;

    createCanvas(960, 600);
    background(220);

    // Ground
    invisible_ground = new Sprite(300,530,1350,10);
    invisible_ground.collider = 'kinematic';
    invisible_ground.visible = false;
	ground = new Sprite(groundImg, width / 2, 1, 'none');


    //Pegasus
    pegasus = new Sprite(400, 447, 600, 1350);
    pegasus.addAnimation("pegasus_running", pegasus_running);
    pegasus.addAnimation("pegasus_running", pegasus_running);
    pegasus.addImage("pegasusImage", pegasusImage);
    pegasus.scale = 0.09;
    pegasus.debug = false;

    // Obstacles
    obstaclesGroup = new Group();

    //Monsters
    monsterGroup = new Group();

    minotaur = new Sprite(110, 461, 720, 1350);
    minotaur.addAnimation("minotaur_running", minotaur_running);
    minotaur.addAnimation("minotaur_standing", minotaur_standing);
    minotaur.addImage("minotaurImage", minotaurImage);
    minotaur.scale = 0.09;
    minotaur.debug = false;
    minotaur.collider = 'static';
    monsterGroup.add(minotaur);

    medusa = new Sprite(35, 452, 720, 1350);
    medusa.addAnimation("medusa_running", medusa_running);
    medusa.addAnimation("medusa_standing", medusa_standing);
    medusa.addImage("medusaImage", medusaImage);
    medusa.scale = 0.09;
    medusa.debug = false;
    medusa.collider = 'static';
    monsterGroup.add(medusa);

    cyclops = new Sprite(80, 465, 720, 1350);
    cyclops.addAnimation("cyclops_running", cyclops_running);
    cyclops.addAnimation("cyclops_standing", cyclops_standing);
    cyclops.addImage("cyclopsImage", cyclopsImage);
    cyclops.scale = 0.09;
    cyclops.debug = false;
    cyclops.collider = 'static';
    monsterGroup.add(cyclops);

    // Restart
    gameOver = true;
	canStartNewGame = true;
}

function draw() {

    // Intro screen changes (putting images in)
    if (screen == 0) {
        pegasus.visible=false;
        medusa.visible=false;
        minotaur.visible=false;
        cyclops.visible=false;

		background(bg)
		fill(255)
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }

	} else if (screen == 1) {
        pegasus.visible=false;
        medusa.visible=false;
        minotaur.visible=false;
        cyclops.visible=false;

        background(bg2, fade)
		fill(255)
        if (fade<0) fadeAmount=1; 
        fade += fadeAmount;
        bgy++;
        if (bgy > height) {
            bgy = 0;
        }
    } else if (screen == 2) {
        pegasus.visible=false;
        medusa.visible=false;
        minotaur.visible=false;
        cyclops.visible=false;

        background(bg3)
		fill(255)
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }
    } else if (screen == 3) {
        pegasus.visible=false;
        medusa.visible=false;
        minotaur.visible=false;
        cyclops.visible=false;

        background(bg4)
		fill(255)
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }
    } else if (screen == 4) {
        pegasus.visible=false;
        medusa.visible=false;
        minotaur.visible=false;
        cyclops.visible=false;

        background(bg5)
		fill(255)
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }
    } else if (screen == 5) {
        pegasus.visible=false;
        medusa.visible=false;
        minotaur.visible=false;
        cyclops.visible=false;

        background(bg6)
		fill(255)
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }
    } else if (screen == 6) {
        pegasus.visible=true;
        medusa.visible=true;
        minotaur.visible=true;
        cyclops.visible=true;

        background(bg7);
		fill(255);
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }

        // Jump horse
        if (kb.presses('space')) {
            if (canStartNewGame) newGame();
            pegasus.vel.y = -8;
            pegasus.ani = "pegasus_running";
            pegasus.rotationLock = true;
            pegasus.bounciness = 0;
            
            medusa.ani = ("medusa_running");
            minotaur.ani = ("minotaur_running");
            cyclops.ani = ("cyclops_running");
        } 
        // Prevent pegasus from going above the top of the screen 
		if (pegasus.y < 0) pegasus.y = 0;
    		
        // wrap ground
		if (camera.x > ground.x + width / 2) {
			ground.x += width;
		}

        camera.off();
        camera.on();

        // Pegasus walk
        // if (kb.presses('up')) {
        //     pegasus.vel.y = -3;
        // }

        // if (kb.presses('left')) {
        //     pegasus.ani = "pegasus_running";
        //     pegasus.mirror.x = true;
        // } else if (kb.presses('right')) {
        //     pegasus.ani = "pegasus_running";
        //     pegasus.mirror.x = false;
        // }

        // if (kb.pressing('left')) {
        //     pegasus.vel.x = -2;
        // } else if (kb.pressing('right')) {
        //     pegasus.vel.x = 2;
        // } else {
        //     pegasus.vel.x = 0;
        // }
        // if (pegasus.ani.name == "pegasus_running" && abs(pegasus.vel.x) < 0.1 && (pegasus.ani.frame == 11 || pegasus.ani.frame == 6)) {
        //     pegasus.ani = "pegasus_standing";
        // }

    }

}

function mousePressed() {
    // Intro screen changes (on click)
	if (screen == 0) {
		screen = 1;
	} else	if (screen == 1) {
		screen = 2;
	} else  if (screen == 2) {
		screen = 3;
	} else  if (screen == 3) {
		screen = 4;
	}else  if (screen == 4) {
		screen = 5;
	} else  if (screen == 5) {
		screen = 6;
	} 

}

function keyPressed(){
    //Skip intro
    if (keyCode === ENTER) {
        screen = 6;
      } 

}

function newGame() {
	gameOver = false;
	canStartNewGame = false;

}
