(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Stone_atlas_1", frames: [[0,0,700,400],[0,402,700,400],[430,804,110,83],[430,974,59,45],[518,889,39,51],[430,889,86,83],[104,804,106,88],[0,804,102,92],[320,804,108,85],[0,898,102,92],[320,891,108,85],[104,894,106,88],[212,804,106,88],[212,894,106,88]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.die = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.food1 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.food2 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.food3 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.h1 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.h2 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.h3 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.run1 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.run2 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.s1 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.s2 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.s3 = function() {
	this.initialize(ss["Stone_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Oma = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {stop:0,"stop":127,"stop":128,run:130,die:141,hit:144};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_129 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_140 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_143 = function() {
		this.stop();
	}
	this.frame_163 = function() {
		this.gotoAndPlay("stop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(11).call(this.frame_140).wait(3).call(this.frame_143).wait(20).call(this.frame_163).wait(1));

	// 圖層_1
	this.instance = new lib.s1();
	this.instance.setTransform(53,-44,1,1,0,0,180);

	this.instance_1 = new lib.s2();
	this.instance_1.setTransform(53,-44,1,1,0,0,180);

	this.instance_2 = new lib.s3();
	this.instance_2.setTransform(53,-44,1,1,0,0,180);

	this.instance_3 = new lib.run2();
	this.instance_3.setTransform(54,-43,1,1,0,0,180);

	this.instance_4 = new lib.run1();
	this.instance_4.setTransform(55,-50,1,1,0,0,180);

	this.instance_5 = new lib.die();
	this.instance_5.setTransform(55,-42,1,1,0,0,180);

	this.instance_6 = new lib.h3();
	this.instance_6.setTransform(54,-43,1,1,0,0,180);

	this.instance_7 = new lib.h2();
	this.instance_7.setTransform(55,-50,1,1,0,0,180);
	this.instance_7._off = true;

	this.instance_8 = new lib.h1();
	this.instance_8.setTransform(57,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:53,y:-44}}]}).to({state:[{t:this.instance_1}]},40).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance,p:{x:53,y:-44}}]},2).to({state:[{t:this.instance_3}]},84).to({state:[{t:this.instance_4,p:{x:55,y:-50}}]},2).to({state:[{t:this.instance_4,p:{x:57,y:-52}}]},2).to({state:[{t:this.instance_4,p:{x:55,y:-50}}]},2).to({state:[{t:this.instance,p:{x:57,y:-48}}]},2).to({state:[{t:this.instance,p:{x:55,y:-46}}]},2).to({state:[{t:this.instance_5,p:{y:-42}}]},1).to({state:[{t:this.instance_5,p:{y:-36}}]},1).to({state:[{t:this.instance_5,p:{y:-31}}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).wait(2).to({x:57,y:-52},0).wait(2).to({x:55,y:-50},0).to({_off:true},2).wait(4).to({_off:false},0).wait(2).to({x:57,y:-52},0).wait(2).to({x:55,y:-50},0).to({_off:true},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-52,112,104);


(lib.Food3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {sway:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.gotoAndPlay("sway");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// 圖層_1
	this.instance = new lib.food3();
	this.instance.setTransform(-43,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:-3.2277,x:-45.25,y:-39.55},0).wait(3).to({rotation:-8.1964,x:-48.45,y:-35.45},0).wait(3).to({rotation:-3.2277,x:-45.25,y:-39.55},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-47.7,96.9,94.4);


(lib.Food2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"sway":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_17 = function() {
		this.gotoAndPlay("sway");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// 圖層_1
	this.instance = new lib.food2();
	this.instance.setTransform(-20,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:6.2064,x:-20.1},0).wait(3).to({rotation:10.4823,x:-21.05,y:-25.15},0).wait(3).to({rotation:3.2277,x:-24.55,y:-22},0).wait(3).to({rotation:-6.2285,x:-25.65,y:-18.7},0).wait(3).to({rotation:-10.7403,x:-26.4,y:-19.9},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-27.1,51.7,59.2);


(lib.Food1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"sway":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("sway");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// 圖層_1
	this.instance = new lib.food1();
	this.instance.setTransform(-30,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:-7.7265,x:-33.75,y:-17.85},0).wait(3).to({rotation:-10.986,x:-35.7,y:-15},0).wait(3).to({rotation:-16.2365,x:-39.1,y:-10.85},0).wait(3).to({scaleX:0.9999,scaleY:0.9999,rotation:-17.5615,x:-40.4,y:-9.95},0).wait(3).to({scaleX:1,scaleY:1,rotation:-10.949,x:-36.75,y:-13.75},0).wait(3).to({rotation:-5.7908,x:-33.95,y:-15.55},0).wait(3).to({rotation:-2.1679,x:-30.85,y:-18.8},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-27.7,71.2,60.7);


(lib.bg1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.bg1();
	this.instance.setTransform(-346,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(-346,-205,700,400), null);


// stage content:
(lib.Stone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.bg1_1();
	this.instance.setTransform(350,200,1,1,0,0,0,4,-5);

	this.instance_1 = new lib.bg1_1();
	this.instance_1.setTransform(350,200,1,1,0,0,0,4,-5);

	this.instance_2 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(350,200,350,200);
// library properties:
lib.properties = {
	id: 'CA022AD7237428418D0B75DEA9ED8EC6',
	width: 700,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/Stone_atlas_1.png?1639246293478", id:"Stone_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CA022AD7237428418D0B75DEA9ED8EC6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;