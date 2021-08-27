    window.onscroll = function() {
    let header = document.getElementById('header');
    if ( window.pageYOffset > 10 ) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

/*let btnsContainer = document.querySelector('#cases .button-group ')
let btn = document.querySelectorAll('button ')


btn.forEach(el => {
    el.addEventListener('click', function(){
        btnsContainer.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        let filtro = el.textContent;
        btnContainer.forEach(btn => {
            btnContainer.style.display = none;
            if (btnContainer.getAttribute('data-filter') == filtro.toLowerCase() || filtro == "All Menu"){
                btnContainer.style.display = 'block';
            }
        })

         
      
    });
}); */

        let btnscontainer = document.querySelectorAll('#cases .button-group button')
        let imgItem = document.querySelectorAll('.row  .element-item img ')

        btnscontainer.forEach(button => {
            button.onclick = function(){
                btnscontainer.forEach(button => {
                    button.className = ""

                })
                button.className = "active" 
                
                let filtroDoAgoraVai = button.textContent
                imgItem.forEach(img => {
                    img.style.display = 'none'
                    if(img.getAttribute('data-filter') == filtroDoAgoraVai.toLowerCase() || filtroDoAgoraVai == "Todos"){
                        img.style.display = 'block'
                    }
                })
            }
        })




