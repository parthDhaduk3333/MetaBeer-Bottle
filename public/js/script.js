setTimeout(callNow(), 2000);
function callNow () {
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    const navIcon = document.querySelector('.navIcon')
    const navbar = document.querySelector('.navbar')
    const Close = document.querySelector('.Close')
    const blackBG = document.querySelector('.blackBG')

    navIcon.addEventListener('click', () => {
        navbar.classList.toggle('navbarActive')
        blackBG.classList.toggle('blackBGActive')
    })
    Close.addEventListener('click', () => {
        navbar.classList.remove('navbarActive')
        blackBG.classList.remove('blackBGActive')
    })
    blackBG.addEventListener('click', () => {
        navbar.classList.remove('navbarActive')
        blackBG.classList.remove('blackBGActive')
    })



    const sliderText = document.querySelectorAll('.sliderTxt');
    const slide = document.getElementById('launch');
    if (slide) {
        sliderText.forEach(item => {
            item.innerHTML = 'Launching Soon'
        })
    } else {
        sliderText.forEach(item => {
            item.innerHTML = 'MINT NOW'
        })
    }
    const res = {
        0: {
            items: 2,
            margin: 10
        },
        500: {
            items: 3,
            margin: 10
        },
        700: {
            items: 4,
            margin: 10
        },
        800: {
            items: 4,
            margin: 10
        },
        1000: {
            items: 4,
            margin: 13
        },
        1100: {
            items: 5,
            margin: 15
        },
        1200: {
            items: 6,
            margin: 15
        },
        1400: {
            items: 7,
            margin: 15
        },
        1600: {
            items: 9,
            margin: 15
        }
    }

    const mint = {
        0: {
            items: 4,
            margin: 10
        },
        700: {
            items: 5,
            margin: 10
        },
        800: {
            items: 6,
            margin: 10
        },
        1000: {
            items: 7,
            margin: 13
        },
        1100: {
            items: 8,
            margin: 15
        },
        1200: {
            items: 10,
            margin: 15
        },
        1400: {
            items: 11,
            margin: 15
        },
        1600: {
            items: 14,
            margin: 15
        }
    }

    $('.NftSlider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        slideTransition: 'linear',
        touchDrag: false,
        mouseDrag: false,
        responsive: slide ? res : mint
    })
    // $('.NftSlider').owlCarousel({
    //     loop: true,
    //     margin: 15,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     slideTransition: 'linear',
    //     touchDrag: false,
    //     mouseDrag: false,
    //     responsive: {
    //         0: {
    //             items: 4,
    //             margin: 7
    //         },
    //         700: {
    //             items: 5,
    //             margin: 7
    //         },
    //         800: {
    //             items: 6,
    //             margin: 10
    //         },
    //         1000: {
    //             items: 7,
    //             margin: 13
    //         },
    //         1200: {
    //             items: 9,
    //             margin: 13
    //         },
    //         1400: {
    //             items: 11,
    //             margin: 15
    //         },
    //         1600: {
    //             items: 14,
    //             margin: 15
    //         }
    //     }
    // })

    $('.NftRevSlider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        slideTransition: 'linear',
        touchDrag: false,
        mouseDrag: false,
        rtl: true,
        responsive: slide ? res : mint
    })
    // =========== scroll ============

    const body = document.body,
        html = document.documentElement;
    const height = (Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight)) - window.innerHeight;
    const scrollbar = document.getElementById('progressbar')
    window.addEventListener('scroll', () => {
        const scrollHeight = window.scrollY;
        const scrollAmount = (100 * scrollHeight) / height
        scrollbar.style.height = `${scrollAmount}vh`
        console.log(scrollAmount)
    })
}