    window.onscroll = function() {
    let header = document.getElementById('header');
    if ( window.pageYOffset > 10 ) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

