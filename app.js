const navbar = document.querySelector('.navbar')

const sticky = navbar.offsetTop

// console.log(navbar.offsetTop)

window.onscroll = () => {
    const mq = window.matchMedia('(max-width: 768px)')

    if (mq.matches && window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}
