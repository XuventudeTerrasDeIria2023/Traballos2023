let x = 0;
let p = -10;
let i = 1;
let doom = document.getElementsByClassName('item');
let confr = (doom.length - 3) * (-350);
let confl = 0;

// Botón izquierdo
document.getElementById("l").addEventListener("click", function () {
    x += 350;
    if (x > confl) {
        x = confr - 350;
    } else {
        document.getElementById("move").style.marginLeft = x + "px";
    }
});

// Botón derecho
document.getElementById("r").addEventListener("click", function () {
    x += -350;
    p += -10;
    if (x < confr) {
        x = 350;
    } else {
        document.getElementById("move").style.marginLeft = x + "px";
    }
});













// var isAnimating = false;

//         function scrollLeftAnimate(elem, unit) {

//             if (!elem || isAnimating) {
//                 //if element not found / if animating, do not execute slide
//                 return;
//             }

//             var time = 300; // animation duration in MS, the smaller the faster.
//             var from = elem.scrollLeft; // to continue the frame posistion
//             var aframe =
//                 10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
//             isAnimating = true; //if animating prevent double trigger animation

//             var start = new Date().getTime(),
//                 timer = setInterval(function () {
//                     var step = Math.min(1, (new Date().getTime() - start) / time);
//                     elem.scrollLeft = ((step * unit) + from);
//                     if (step === 1) {
//                         clearInterval(timer);
//                         isAnimating = false;
//                     }
//                 }, aframe);
//         }



//         function initDealCarrousel(dealCarrouselID) {
//             var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
//             var cardOutterWidth;
//             var maxCarrouselScroll;

//             function updateUpaCarrouselInfo() {
//                 cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
//                 maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
//                         cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
//                     .clientWidth;
//             }

//             document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
//                 function () {
//                     updateUpaCarrouselInfo(); //in case window resized, will get new info
//                     if (target.scrollLeft > 0) {
//                         scrollLeftAnimate(target, -cardOutterWidth * 2);
//                     }
//                 }
//             );

//             document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
//                 function () {
//                     updateUpaCarrouselInfo(); //in case window resized, will get new info 
//                     if (target.scrollLeft < maxCarrouselScroll) {
//                         scrollLeftAnimate(target, cardOutterWidth * 2);
//                     }
//                 }
//             );
//         }
//         // Initiate the container with ID
//         initDealCarrousel('va_container'); //carrousel ID