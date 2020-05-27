    $(document).scroll(function(){
        if($(document.scrollTop()) > $('header').height() + 10) {
            $("nav").addClass('fixed');
        } else {
            $("navbar").removeClass('fixed');
        }
    });