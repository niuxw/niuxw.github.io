var controller = new ScrollMagic.Controller();
const tween = new TimelineMax();
tween
    .to(".box-1", 1, {
        // opacity: 0.8
    }, '-=1')
    .to(".box-2", 1, {
        marginTop: 50,
        // opacity: 0.9
    }, '-=1')
    .to(".box-3", 1, {
        marginTop: 50
    }, '-=1')
    .to(".box-4", 1, {
        marginTop: 50
    }, '-=1')
    .to(".box-5", 1, {
        marginTop: 50
    }, '-=1')
    .to(".box-6", 1, {
        marginTop: 50
    }, '-=1')

const scene = new ScrollMagic.Scene({
    triggerElement: '#container',
    duration: 1800,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators({ name: "die1" })
    .addTo(controller);

const tl2 = new TimelineMax();
tl2.add(
    TweenMax.fromTo('.box-1', 2, { xPercent: 450, yPercent: 150, opacity: 0, ease: Power1.easeInOut }, { xPercent: 0, yPercent: 0, opacity: 1, ease: Power1.easeInOut }),
)
tl2.add(
    TweenMax.fromTo('#t1', 1, { yPercent: 50, autoAlpha: 0, ease: Power1.easeInOut }, { yPercent: 0, autoAlpha: 1, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('.box-2', 2, { xPercent: 450, yPercent: 150, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
tl2.add(
    TweenMax.fromTo('#t1', 0.5, { opacity: 1, ease: Power1.easeInOut }, { autoAlpha: 0, ease: Power1.easeInOut }),
    '-=1'
)
// text in
tl2.add(
    TweenMax.fromTo('#text1', 0.5, { xPercent: 100, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
tl2.add(
    TweenMax.fromTo('#text2', 0.5, { xPercent: -100, yPercent: 50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
tl2.add(
    TweenMax.fromTo('#text3', 0.5, { xPercent: 100, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
tl2.add(
    TweenMax.fromTo('#search-bar', 0.5, { xPercent: 100, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
// end text in
tl2.add(
    TweenMax.fromTo('#t2', 1, { yPercent: 50, autoAlpha: 0, ease: Power1.easeInOut }, { yPercent: 0, autoAlpha: 1, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('.box-3', 2, { xPercent: 450, yPercent: 150, opacity: 0, ease: Power1.easeInOut }, { xPercent: 0, yPercent: 0, opacity: 1, ease: Power1.easeInOut }),
)
tl2.add(
    TweenMax.fromTo('#t2', 0.5, { opacity: 1, ease: Power1.easeInOut }, { autoAlpha: 0, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('#t3', 1, { yPercent: 50, autoAlpha: 0, ease: Power1.easeInOut }, { yPercent: 0, autoAlpha: 1, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('.box-4', 2, { xPercent: 450, yPercent: 150, opacity: 0, ease: Power1.easeInOut }, { xPercent: 0, yPercent: 0, opacity: 1, ease: Power1.easeInOut }),
)
tl2.add(
    TweenMax.fromTo('#t3', 0.5, { opacity: 1, ease: Power1.easeInOut }, { autoAlpha: 0, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('#t4', 1, { yPercent: 50, autoAlpha: 0, ease: Power1.easeInOut }, { yPercent: 0, autoAlpha: 1, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('.box-5', 2, { xPercent: 450, yPercent: 150, opacity: 0, ease: Power1.easeInOut }, { xPercent: 0, yPercent: 0, opacity: 1, ease: Power1.easeInOut }),
)

// report in
tl2.add(
    TweenMax.fromTo('#report1', 0.5, { xPercent: 800, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
tl2.add(
    TweenMax.fromTo('#report2', 0.5, { xPercent: 800, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
tl2.add(
    TweenMax.fromTo('#report3', 0.5, { xPercent: 800, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }),
)
// report text in

tl2.add(
    TweenMax.fromTo('#t4', 0.5, { opacity: 1, ease: Power1.easeInOut }, { autoAlpha: 0, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('#t5', 1, { yPercent: 50, autoAlpha: 0, ease: Power1.easeInOut }, { yPercent: 0, autoAlpha: 1, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('.box-6', 2, { xPercent: 450, yPercent: 150, opacity: 0, ease: Power1.easeInOut }, { xPercent: 0, yPercent: 0, opacity: 1, ease: Power1.easeInOut }),
)
tl2.add(
    TweenMax.fromTo('#t5', 0.5, { opacity: 1, ease: Power1.easeInOut }, { autoAlpha: 0, ease: Power1.easeInOut }),
    '-=1'
)
tl2.add(
    TweenMax.fromTo('#t6', 1, { yPercent: 50, autoAlpha: 0, ease: Power1.easeInOut }, { yPercent: 0, autoAlpha: 1, ease: Power1.easeInOut }),
    '-=1'
)

tl2.add(
    TweenMax.to(".box-6", 1, { css: { transform: "translate(25vw, -15vh) skewX(0deg) skewY(0deg) scale(0.4, 0.35)", width: "320px", height: "200px" } }),
)
tl2.add(
    TweenMax.to(".box-5", 1, { css: { transform: "translate(0vw, -15vh) skewX(0deg) skewY(0deg) scale(0.4, 0.35)", width: "320px", height: "200px" } }),
    '-=1'
)
tl2.add(
    TweenMax.to(".box-4", 1, { css: { transform: "translate(-25vw, -15vh) skewX(0deg) skewY(0deg) scale(0.4, 0.35)", width: "320px", height: "200px" } }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-3", 1, { css: { transform: "translate(25vw, 15vh) skewX(0deg) skewY(0deg) scale(0.4, 0.35)", width: "320px", height: "200px" } }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-2", 1, { css: { transform: "translate(0vw, 15vh) skewX(0deg) skewY(0deg) scale(0.4, 0.35)", width: "320px", height: "200px" } }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-1", 1, { css: { transform: "translate(-25vw, 15vh) skewX(0deg) skewY(0deg) scale(0.4, 0.35)", width: "320px", height: "200px" } }),
    "-=1"
)

tl2.add(
    TweenMax.fromTo('#t6', 0.5, { opacity: 1, ease: Power1.easeInOut }, { autoAlpha: 0, ease: Power1.easeInOut }),
    "-=1"
)

// shrink 6 boxes
tl2.add(
    TweenMax.to(".box-6", 1, { css: { transform: "translate(10vw, -8vh) scale(0.3, 0.25)", width: "320px", height: "200px" } }),
)
tl2.add(
    TweenMax.to(".box-5", 1, { css: { transform: "translate(0vw, -8vh) scale(0.3, 0.25)", width: "320px", height: "200px" } }),
    '-=1'
)
tl2.add(
    TweenMax.to(".box-4", 1, { css: { transform: "translate(-10vw, -8vh) scale(0.3, 0.25)", width: "320px", height: "200px" } }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-3", 1, { css: { transform: "translate(10vw, 8vh) scale(0.3, 0.25)", width: "320px", height: "200px" } }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-2", 1, { css: { transform: "translate(0vw, 8vh) scale(0.3, 0.25)", width: "320px", height: "200px" } }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-1", 1, { css: { transform: "translate(-10vw, 8vh) scale(0.3, 0.25)", width: "320px", height: "200px" } }),
    "-=1"
)

// end of shrink

tl2.add(
    TweenMax.to(".box-6", 1, { autoAlpha: 0 }),
    // "-=1"
)
tl2.add(
    TweenMax.to(".box-5", 1, { autoAlpha: 0 }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-4", 1, { autoAlpha: 0 }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-3", 1, { autoAlpha: 0 }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-2", 1, { autoAlpha: 0 }),
    "-=1"
)
tl2.add(
    TweenMax.to(".box-1", 1, { autoAlpha: 0 }),
    "-=1"
)

const scene2 = new ScrollMagic.Scene({
    triggerElement: '#container',
    // offset: 100,
    duration: 2300,
    triggerHook: 0
})
    .setTween(tl2)
    .setPin('#container')
    .addIndicators({ name: "pin2" })
    .addTo(controller);

// const tl2text = new TimelineMax();
// tl2text.add(
//     TweenMax.fromTo('#t1', 0.5, {autoAlpha:0, ease:Power1.easeInOut}, {autoAlpha:1, ease:Power1.easeInOut}),
// )
// tl2text.add(
//     TweenMax.fromTo('#t1', 0.5,  { autoAlpha:1, ease:Power1.easeInOut}, {autoAlpha:0, ease:Power1.easeInOut}),
//     // '-=1'
// )
// tl2text.add(
//     TweenMax.fromTo('#t2', 0.5, {autoAlpha:0, ease:Power1.easeInOut}, {autoAlpha:1, ease:Power1.easeInOut}),
// )
// tl2text.add(
//     TweenMax.fromTo('#t2', 0.5,  { autoAlpha:1, ease:Power1.easeInOut}, {autoAlpha:0, ease:Power1.easeInOut}),
//     // '-=1'
// )
// tl2text.add(
//     TweenMax.fromTo('#t3', 0.5, {autoAlpha:0, ease:Power1.easeInOut}, {autoAlpha:1, ease:Power1.easeInOut}),
// )
// tl2text.add(
//     TweenMax.fromTo('#t3', 0.5,  { autoAlpha:1, ease:Power1.easeInOut}, {autoAlpha:0, ease:Power1.easeInOut}),
//     // '-=1'
// )
// tl2text.add(
//     TweenMax.fromTo('#t4', 0.5, {autoAlpha:0, ease:Power1.easeInOut}, {autoAlpha:1, ease:Power1.easeInOut}),
// )
// tl2text.add(
//     TweenMax.fromTo('#t4', 0.5,  { autoAlpha:1, ease:Power1.easeInOut}, {autoAlpha:0, ease:Power1.easeInOut}),
//     // '-=1'
// )
// tl2text.add(
//     TweenMax.fromTo('#t5', 0.5, {autoAlpha:0, ease:Power1.easeInOut}, {autoAlpha:1, ease:Power1.easeInOut}),
// )
// tl2text.add(
//     TweenMax.fromTo('#t5', 0.5,  { autoAlpha:1, ease:Power1.easeInOut}, {autoAlpha:0, ease:Power1.easeInOut}),
//     // '-=1'
// )

// const scene2text = new ScrollMagic.Scene ({
//     triggerElement: '#container',
//     // offset: 500,
//     duration: 2300,
//     triggerHook: 0
// })
// .setTween(tl2text)
// .setPin('#container')
// .addIndicators({name: "text1" })
// .addTo(controller);

const laptopH = document.getElementById('iphone').getBoundingClientRect().offsetHeight;
// console.log("aaaa");
// console.log(laptopH);

const tl3 = new TimelineMax();
tl3.add(
    TweenMax.to(".laptop", 0.1, { autoAlpha: 1 }),
    "-=1"
)
tl3.add(
    TweenMax.to('.laptop', 1, { yPercent: -10, ease: Power1.easeInOut }),
    // TweenMax.to(".laptop", 1, {autoAlpha: 1}),
    "-=1"
)
tl3.add(
    TweenMax.to('.phone', 0.5, { xPercent: 28, autoAlpha: 1, ease: Power1.easeInOut }),
    // TweenMax.to(".laptop", 1, {autoAlpha: 1}),
    "-=1"
)
tl3.add(
    TweenMax.to('.pad', 0.5, { xPercent: -28, autoAlpha: 1, ease: Power1.easeInOut }),
    // TweenMax.to(".laptop", 1, {autoAlpha: 1}),
    "-=1"
)
tl3.add(
    TweenMax.to('.phone', 0.5, { yPercent: -8, ease: Power1.easeInOut }),
    //   TweenMax.fromTo('.phone', 1, {y: laptopH, ease:Power1.easeInOut}, {y: laptopH, ease:Power1.easeInOut  }),
    "-=0.5"
)
tl3.add(
    TweenMax.to('.pad', 0.5, { yPercent: -8, ease: Power1.easeInOut }),
    //   TweenMax.fromTo('.pad', 1, {y: laptopH, ease:Power1.easeInOut}, {y: laptopH, ease:Power1.easeInOut  }),
    "-=0.5"
)

tl3.add(
    TweenMax.to('#go-to-web', 0.5, { y: -140, autoAlpha: 1, ease: Power1.easeInOut }),
    "-=1"
)

tl3.add(
    TweenMax.to('#go-to-app', 0.5, { y: -120, autoAlpha: 1, ease: Power1.easeInOut }),
    "-=1"
)

const scene3 = new ScrollMagic.Scene({
    triggerElement: '#container',
    offset: 2300,
    duration: 1000,
    triggerHook: 0,
})
    .setTween(tl3)
    .setPin('#container')
    .addIndicators({ name: "laptop1" })
    .addTo(controller);


const height2 = document.documentElement.clientHeight / 2;
const height = document.documentElement.clientHeight;

var viewer = new Marzipano.Viewer(document.getElementById('pano'), { controls: { scrollZoom: false } });

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
    // "https://www.marzipano.net/media/cubemap/{f}.jpg"
    "https://www.marzipano.net/media/equirect/angra.jpg"
);

// Create geometry.
// var geometry = new Marzipano.CubeGeometry([{ tileSize: 1024, size: 1024 }]);
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100 * Math.PI / 180);
var view = new Marzipano.RectilinearView(null, limiter);
var autorotate = Marzipano.autorotate({
    yawSpeed: 0.1,         // Yaw rotation speed
    targetPitch: 0,        // Pitch value to converge to
    targetFov: Math.PI / 2   // Fov value to converge to
});

// Create scene.
var pano_scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
});

// Display scene.
pano_scene.switchTo();
// Start autorotation immediately
viewer.startMovement(autorotate);




