new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.3,
    image1: './images/01.jpg',
    image2: './images/02.jpg',
    displacementImage: './images/diss.png',
    // imagesRatio: 380 / 300
})

//navbar
TweenMax.staggerFrom('.navbar div', 1, {
    delay: 1,
    opacity: 0,
    y: '20',
    ease: Expo.easeInOut
})

// media 
TweenMax.staggerFrom('.media ul li', 1, {
    delay: 1,
    opacity: 0,
    x: '-100%',
    ease: Expo.easeInOut
}, 0.5)

// text
TweenMax.from('.text h1 .hidetext', 1, {
    delay: 1,
    opacity: 0,
    x: '-100%',
    ease: Expo.easeInOut
})

TweenMax.from('.text h3 .hidetext', 1, {
    delay: 1.3,
    y: '100%',
    ease: Expo.easeInOut
})

TweenMax.from('.text p .hidetext', 1, {
    delay: 1.4,
    y: '100%',
    ease: Expo.easeInOut
})

TweenMax.from('.text h2', 1, {
    delay: 1.4,
    opacity: 0,
    x: '-100%',
    ease: Expo.easeInOut
})

// sponsor
TweenMax.from('.sponsor img', 1, {
    delay: 1.5,
    opacity: 0,
    y: '20',
    ease: Expo.easeInOut
})

TweenMax.from('.sponsor p', 1, {
    delay: 1.6,
    opacity: 0,
    y: '20',
    ease: Expo.easeInOut
})

// distortion
TweenMax.from('.distortion', 1, {
    delay: 1.6,
    opacity: 0,
    y: '50',
    ease: Expo.easeInOut
})

// overlay
TweenMax.to('.first', 1, {
    delay: 0.5,
    top: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1, {
    delay: 0.7,
    top: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1, {
    delay: 0.9,
    top: '-100%',
    ease: Expo.easeInOut
})
