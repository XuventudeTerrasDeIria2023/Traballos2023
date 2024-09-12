// $("#capas")
//     .animate({top: '20%'}, 1500)
//     .fadeOut(500)
//     .animate({top:'0%'})
//     .fadeIn(200);


$(document).ready(function() {
    var $animationElement = $('#capas');
    var $window = $(window);

    function checkIfInView() {
        var windowHeight = $window.height();
        var scrollTop = $window.scrollTop();

        var elementOffset = $animationElement.offset().top;
        var elementHeight = $animationElement.height();

        if (elementOffset < (scrollTop + windowHeight) && (elementOffset + elementHeight) > scrollTop) {
            // Element is in view, start the animation
            $animationElement
                .animate({top: '20%'}, 1500)
                .fadeOut(500)
                .animate({top:'0%'})
                .fadeIn(200);
        }
    }

    $window.on('scroll', checkIfInView);
    checkIfInView(); // Initial check in case the element is already in view
});