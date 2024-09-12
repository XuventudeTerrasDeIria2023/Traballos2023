var transitionSpeed = 2;
var slideDuration = 8;
var easingPower = Power1.easeOut;


$(function () {

	//Init the slider
	initSliderKenburn("#kenburns-slider");
	
});


//Init the kenburn effect slider based on the slider's id
function initSliderKenburn (sliderId) {
	var kenburns = new TimelineMax({repeat: -1}); // Setup the master animation with infinite loop

	//Register animation for each slider's image
	$(sliderId+" img").each(function() {

		// add the animation to the master animation with an overlap on the prev item 
		kenburns.add(imgAnim($(this), $(this).index()), "-="+ transitionSpeed +"" ); 

	});
	
	// // animation to end smoothly before looping	
  	// kenburns.to(sliderId+" img", 1, {opacity:0, ease:Linear.easeNone}, "-="+ transitionSpeed +"") 
}


function imgAnim(currentImage, currentImageIndex) {

	return new TimelineMax()
		.set(currentImage, {
			zIndex : currentImageIndex
		})
		.to(currentImage, transitionSpeed, {
			opacity : 1,
			ease    : Power0.easeNone
		})
		.to(currentImage, slideDuration, { // Randomize the Ken Burns effect for different animation for each img
			xPercent : randomIntFromInterval(-10, 10),
			yPercent : randomIntFromInterval(-10, 10),
			scale 	 : randomFloatFromInterval(1, 1.2),
			ease 	   : easingPower
		}, 0)
		.set(currentImage, {
			opacity : 0
		});
}

// function to randomize the Ken Burns effect animation
function randomIntFromInterval(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
function randomFloatFromInterval(min, max){
	return (Math.random()*(max-min)+min).toFixed(2);
}