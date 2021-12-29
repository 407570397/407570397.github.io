var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
window.onload = function(){
    init();
}
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("CA022AD7237428418D0B75DEA9ED8EC6");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Stone();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.

	const SPEED = 10;
	const MISS = 10;
	let Start = false;
	let Hp = 100;
	let Score = 0;
	let Positions = 1;
	let isKeydown = false;
	var Stone = new lib.Oma();
	Stone.x = 360;
	Stone.y = 320;
	exportRoot.addChild(Stone);
	
	var loadint = 0;
	var sounds = [
		{src:"./audio/BGM.mp3",id:"BGM"},
		{src:"./audio/Over.mp3",id:"Over"},
		{src:"./audio/Start.mp3",id:"Start"},
		{src:"./audio/Eat.mp3",id:"Eat"},
		{src:"./audio/Hit.mp3",id:"Hit"},
	];
	createjs.Sound.alternateExtensions = ["mp3"];
	createjs.Sound.addEventListener("fileload", (e)=>{
		loadint++
		if(loadint === sounds.length){
			bgAudio = createjs.Sound.play("BGM", {loop:-1});
			bgAudio.volume = 0.05;
		}
	});
	createjs.Sound.registerSounds(sounds, "/");
	
	document.querySelector(".gamePlayBtn").addEventListener("click",()=>{
		SAudio = createjs.Sound.play("Start");
		SAudio.volume = 0.3;
		Start = true;
		document.querySelector(".gamePlayBtn").style.display = "none";
		window.addEventListener("keydown",keydownMoveFn)
		window.addEventListener("keyup",keyupMoveFn)
	})

	document.querySelector(".resetPlay").addEventListener("click",()=>{
		SAudio = createjs.Sound.play("Start");
		SAudio.volume = 0.3;
		document.querySelector(".over").style.display = "none";
		Start = true;
		Hp = 100;
		Score = 0;
		document.querySelector(".hp").style.width = `${Hp}%`;
		document.querySelector(".Score").innerHTML = Score;
		Stone.gotoAndPlay("stop");
		createjs.Ticker.addEventListener("tick",tickfn)
		isKeydown = false;
		window.addEventListener("keydown",keydownMoveFn)
		window.addEventListener("keyup",keyupMoveFn)
	})
	
	function keydownMoveFn(e){
		if(isKeydown) return;
		if(e.keyCode===37 || e.keyCode===39){
			isKeydown = true;
			Positions = e.keyCode === 39 ? 1 : -1;
			Stone.gotoAndPlay("run");
		}
	}
	function keyupMoveFn(e){
		isKeydown = false;
		Stone.gotoAndPlay("stop");
	}

	let timeFood = setInterval(()=>{
		if(!Start) return;
		let Food1 = new lib.Food1();
		let Food2 = new lib.Food2();
		let Food3 = new lib.Food3();
		Food1.x = Math.floor(Math.random()*(670-30+1)+30);
		Food1.y = -50;
		Food2.x = Math.floor(Math.random()*(670-30+1)+30);
		Food2.y = -50;
		Food3.x = Math.floor(Math.random()*(670-30+1)+30);
		Food3.y = -50;
		exportRoot.addChild(Food1,Food2,Food3);

		createjs.Tween.get(Food1)
		.to({y:400}, 10000)
		.call(()=>{
			exportRoot.removeChild(Food1);
			Hp -= MISS;
			document.querySelector(".hp").style.width = `${Hp}%`;
    	})
		.addEventListener("change",()=>{
			let hit = ndgmr.checkRectCollision(Food1,Stone);
			if(Hp > 0){
				if(hit){
					EAudio = createjs.Sound.play("Eat")
					EAudio.volume = 0.3;
					createjs.Tween.removeTweens(Food1);
					exportRoot.removeChild(Food1);
					Score ++;
					document.querySelector(".Score").innerHTML = Score;
				}
			}
		})	

		createjs.Tween.get(Food2)
		.to({y:400}, 5000)
		.call(()=>{
			exportRoot.removeChild(Food2);
			Hp -= MISS;
			document.querySelector(".hp").style.width = `${Hp}%`;
    	})
		.addEventListener("change",()=>{
			let hit = ndgmr.checkRectCollision(Food2,Stone);
			if(Hp > 0){
				if(hit){
					EAudio = createjs.Sound.play("Eat")
					EAudio.volume = 0.3;
					createjs.Tween.removeTweens(Food2);
					exportRoot.removeChild(Food2);
					Score ++;
					document.querySelector(".Score").innerHTML = Score;
				}
			}
		})	

		createjs.Tween.get(Food3)
		.to({y:400}, 3000)
		.call(()=>{
			exportRoot.removeChild(Food3);
    	})
		.addEventListener("change",()=>{
			let hit = ndgmr.checkRectCollision(Food3,Stone);
			if(Hp > 0){
				if(hit){
					isKeydown = false;
					HAudio = createjs.Sound.play("Hit")
					HAudio.volume = 0.3;
					Stone.gotoAndPlay("hit");
					createjs.Tween.removeTweens(Food3);
					exportRoot.removeChild(Food3);
					Hp -= MISS;
					document.querySelector(".hp").style.width = `${Hp}%`;
				}
			}
		})	
	},2500)

	createjs.Ticker.addEventListener("tick",tickfn)
	function tickfn(){
		if(Hp <= 0){
			Start = false;
			OAudio = createjs.Sound.play("Over")
			OAudio.volume = 0.3;
			Stone.gotoAndPlay("die");
			document.querySelector(".over").style.display = "flex";
			window.removeEventListener("keydown",keydownMoveFn)
			window.removeEventListener("keyup",keyupMoveFn)
			createjs.Ticker.removeEventListener("tick",tickfn)
		}
		if(!isKeydown)return;
		Stone.x += SPEED * Positions;
		Stone.scaleX = Positions;
		if(Stone.x <= 50){
			Stone.x += SPEED;
		}
		if(Stone.x >= 650){
			Stone.x -= SPEED;
		}
	}

	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}