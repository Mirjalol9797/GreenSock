var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li", 1, {
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".search", 1, {
    delay: .6,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
})

TweenMax.from(".account", 1, {
    delay: .7,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
})

TweenMax.from(".cart", 1, {
    delay: .8,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
})

TweenMax.from(".content .title", 1, {
    delay: 1.2,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
})

TweenMax.from(".content .tagline", 1, {
    delay: 1.4,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
})

TweenMax.from(".content .pages", 1, {
    delay: 1.4,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
})

TweenMax.from(".content .more", 1, {
    delay: 1.4,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
})

TweenMax.from(".content .desc", 1, {
    delay: 1.4,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
})

TweenMax.from(".juice", 1, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".arrows .prev", 1, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".arrows .next", 1, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    delay: 2.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    delay: 2.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    delay: 2.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    delay: 2.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
