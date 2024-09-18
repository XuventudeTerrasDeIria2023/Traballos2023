function parallax() {
    var prlx_lyr_space = document.getElementById('prlx_lyr_space');
    var prlx_lyr_venus = document.getElementById('prlx_lyr_venus');
    var prlx_lyr_jupiter = document.getElementById('prlx_lyr_jupiter');
    var prlx_lyr_moon = document.getElementById('prlx_lyr_moon');
    var prlx_lyr_sun = document.getElementById('prlx_lyr_sun');
    prlx_lyr_space.style.top = -(window.pageYOffset / 2) + 'px';
    prlx_lyr_venus.style.top = -(window.pageYOffset / 9) + 'px';
    prlx_lyr_jupiter.style.top = -(window.pageYOffset / 4) + 'px';
    prlx_lyr_moon.style.top = -(window.pageYOffset / 7) + 'px';
    prlx_lyr_sun.style.top = -(window.pageYOffset / 3) + 'px';
  }
  window.addEventListener("scroll", parallax, false);
/**jQuery Smooth Scroll **/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});

/** Photo Gallery fancybox app **/
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});