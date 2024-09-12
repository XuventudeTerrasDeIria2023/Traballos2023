$(document).ready(function(){
    
   $('.barra-superior span').on('click', function(){
       
       $('nav').addClass('mostrar');
       $('.cubrir').addClass('mostrar');
       
   });
    
    
    $('nav a').on('click', function(){
        $('nav').removeClass('mostrar');
        $('.cubrir').removeClass('mostrar');
    });
    
    $('.cubrir').on('click', function(){
        $('nav').removeClass('mostrar');
        $('.cubrir').removeClass('mostrar');      
    });
    
     $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    
    
    $('dd').hide();
    
    $('dt').on('click', function(){
       $(this).next('dd').slideToggle('slow')
       .siblings('dd').slideUp('fast');
    });
    
});