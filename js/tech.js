var controller = new ScrollMagic.Controller();

const height2 = document.documentElement.clientHeight / 2;
const height = document.documentElement.clientHeight;

var tl4 = new TimelineMax();
tl4.add(
    TweenMax.fromTo("#container4", 1, {autoAlpha: 1, scale: 0.8}, {autoAlpha: 1, scale: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)
tl4.add(
    TweenMax.fromTo('#cloud-img-layer', 1, {scale: 1, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
    "-=1"
)
tl4.add(
    TweenMax.fromTo('#cloud-text', 1, { yPercent:250 , opacity: 0 , ease:Power1.easeInOut }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut }),
    "-=1"
)

var startpin = new ScrollMagic.Scene({
  triggerElement: '#trigger4',
  triggerHook: 0,
  duration: 500
})
.setPin("#container4")
.addIndicators({name: "pin" })
.addTo(controller);

// tween
new ScrollMagic.Scene({
  triggerElement: '#trigger4',
  triggerHook: 0,
  duration: 500
})
.setTween(tl4)
.addIndicators({name: "fade" }) 
.addTo(controller);

var tl0 = new TimelineMax();
tl0.add(
    TweenMax.fromTo("#container0", 1, {autoAlpha: 1, scale: 0.8}, {autoAlpha: 1, scale: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)
tl0.add(
    TweenMax.fromTo('#app-img-layer', 1, {scale: 1, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
    "-=1"
)
tl0.add(
    TweenMax.fromTo('#app-text', 1, { yPercent:250 , opacity: 0 , ease:Power1.easeInOut }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut }),
    "-=1"
)

var startpin = new ScrollMagic.Scene({
  triggerElement: '#trigger0',
  triggerHook: 0,
  duration: 500
})
.setPin("#container0")
.addIndicators({name: "pin" })
.addTo(controller);

// tween
new ScrollMagic.Scene({
  triggerElement: '#trigger0',
  triggerHook: 0,
  duration: 500
})
.setTween(tl0)
.addIndicators({name: "fade" }) 
.addTo(controller);


var tl = new TimelineMax();
tl.add(
    TweenMax.fromTo("#container1", 1, {autoAlpha: 1, scale: 0.8}, {autoAlpha: 1, scale: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)
tl.add(
    TweenMax.fromTo('#drone-img-layer', 1, {scale: 1, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
    "-=1"
)
tl.add(
    TweenMax.fromTo('#drone-text', 1, { yPercent:250 , opacity: 0 , ease:Power1.easeInOut }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut }),
    "-=1"
)

var startpin = new ScrollMagic.Scene({
  triggerElement: '#trigger',
  triggerHook: 0,
  duration: 500
})
.setPin("#container1")
.addIndicators({name: "pin" })
.addTo(controller);

// tween
new ScrollMagic.Scene({
  triggerElement: '#trigger',
  triggerHook: 0,
  duration: 500
})
.setTween(tl)
.addIndicators({name: "fade" }) 
.addTo(controller);

var viewer = new Marzipano.Viewer(document.getElementById('pano'), { controls: { scrollZoom: false } });

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  "https://www.marzipano.net/media/cubemap/{f}.jpg"
);

// Create geometry.
var geometry = new Marzipano.CubeGeometry([{ tileSize: 1024, size: 1024 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100*Math.PI/180);
var view = new Marzipano.RectilinearView(null, limiter);
var autorotate = Marzipano.autorotate({
  yawSpeed: 0.1,         // Yaw rotation speed
  targetPitch: 0,        // Pitch value to converge to
  targetFov: Math.PI/2   // Fov value to converge to
});

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});

// Display scene.
scene.switchTo();
// Start autorotation immediately
viewer.startMovement(autorotate); 

var tl2 = new TimelineMax();
tl2.add(
    TweenMax.fromTo("#container2", 1, {autoAlpha: 1, scale: 0.8}, {autoAlpha: 1, scale: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)
tl2.add(
    TweenMax.fromTo('#panorama-img-layer', 1, {scale: 1, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
    "-=1"
)
tl2.add(
    TweenMax.fromTo('#text-360', 1, { yPercent:250 , opacity: 0 , ease:Power1.easeInOut }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut }),
    "-=1"
)

var startpin = new ScrollMagic.Scene({
  triggerElement: '#trigger2',
  triggerHook: 0,
  duration: 500
})
.setPin("#container2")
.addIndicators({name: "pin2" })
.addTo(controller);

// tween
new ScrollMagic.Scene({
  triggerElement: '#trigger2',
  triggerHook: 0,
  duration: 500
})
.setTween(tl2)
.addIndicators({name: "fade2" }) 
.addTo(controller);

// map

var tl3 = new TimelineMax();
tl3.add(
    TweenMax.fromTo("#container3", 1, {autoAlpha: 1, scale: 0.8}, {autoAlpha: 1, scale: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)
tl3.add(
    TweenMax.fromTo('#map-img-layer', 1, {scale: 1, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
    "-=1"
)
tl3.add(
    TweenMax.fromTo('#map-text', 1, { yPercent:250 , opacity: 0 , ease:Power1.easeInOut }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut }),
    "-=1"
)

var startpin = new ScrollMagic.Scene({
  triggerElement: '#trigger3',
  triggerHook: 0,
  duration: 500
})
.setPin("#container3")
.addIndicators({name: "pin" })
.addTo(controller);

// tween
new ScrollMagic.Scene({
  triggerElement: '#trigger3',
  triggerHook: 0,
  duration: 500
})
.setTween(tl3)
.addIndicators({name: "fade" }) 
.addTo(controller);
