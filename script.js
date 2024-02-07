window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showButtonWhatsappOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal().reveal('#home h1, #sobre h1, #regulamentos h1', { distance: '400px', origin: 'top', opacity: 0, duration: 600, easing: 'ease-in-out'});

ScrollReveal().reveal('h2, #topics .card, #topics ion-icon, #tableprofit button, #beneficios .card, #sobre p, #regulamento h3', { distance: '400px', origin: 'bottom', opacity: 0, duration: 600, easing: 'ease-in-out'});

ScrollReveal().reveal('.buttons, #home .text p, .details details.left, #sobre .button, #regulamentos .button, #regulamentos ul, #regulamentos p', { distance: '100px', origin: 'left', opacity: 0, duration: 600, easing: 'ease-in-out'});

ScrollReveal().reveal('#home .image, #tableprofit .table, .details details.right', { distance: '100px', origin: 'right', opacity: 0, duration: 600, easing: 'ease-in-out'});
