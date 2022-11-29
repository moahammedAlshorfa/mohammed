let v = document.querySelector('nav')
let x = document.querySelector('.zx')
window.onscroll = function () {
    if (scrollY > 100) {
        v.style.backgroundColor = 'white'
        x.src = 'bite-logo-w2-black.png'
        v.style.color = 'black' 
    } else {
        v.style.backgroundColor = 'transparent'
        v.style.color = 'white' 
        x.src = 'bite-logo-w2-white.png'

    }
}