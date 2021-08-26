    window.onscroll = function() {
    let header = document.getElementById('header');
    if ( window.pageYOffset > 10 ) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

let btnsContainer = document.querySelector('#cases .button-group')
let btn = document.querySelectorAll('button')

btn.forEach(el => {
    el.addEventListener('click', function(){
        btnsContainer.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});