/* jQuery(document).ready(function($) {
    window.onscroll = function(){
        if (window.pageYOffset > 140){
            $('#header').addClass("active");
        }else{
            $('#header').removeClass("active");
        }
    }
} */
console.log()


window.onscroll = function() {
    let header = document.getElementById('header');
    if ( window.pageYOffset > 140 ) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}