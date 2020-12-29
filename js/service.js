var controller = new ScrollMagic.Controller();

const height1 = document.getElementById('img1').getBoundingClientRect().height;
const width1 = document.getElementById('img1').getBoundingClientRect().width;
const fadeout1 = 0.95 * height1;
const pin1 = 1.05 * height1;
const left1 = document.documentElement.clientWidth * 0.1 + width1;

var tl = new TimelineMax();
// tl.add(
//     TweenMax.fromTo("#img1", 1, {x: -left1}, {x: 0})
// )

tl.add(
    TweenMax.fromTo('#img1', 1, {scale: 1.2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)

// var ds1 = new TimelineMax();
// ds1.add(
//     TweenMax.to('#img1', 1, {autoAlpha: 0, ease:Power2.easeInOut})
// )

// tween
new ScrollMagic.Scene({
  triggerElement: '#p1',
  triggerHook: 0.8,
  // duration: 200
})
.setTween(tl)
.addIndicators({name: "come1" }) 
.addTo(controller);

// new ScrollMagic.Scene({
//   triggerElement: '#p1',
//   offset: fadeout1,
//   triggerHook: 0.8,
//   duration: 300
// })
// .setTween(ds1)
// .addIndicators({name: "ds1" }) 
// .addTo(controller);

// var startpin = new ScrollMagic.Scene({
//   triggerElement: '#p1',
//   offset: pin1,
//   triggerHook: 0.8,
//   duration: 150
// })
// .setPin("#img1")
// .addIndicators({name: "pin1" })
// .addTo(controller);

const height2 = document.getElementById('img2').getBoundingClientRect().height;
const width2 = document.getElementById('img2').getBoundingClientRect().width;
const fadeout2 = 0.95 * height2;
const pin2 = 1.05 * height2;
const right2 = document.documentElement.clientWidth + width2;

var tl2 = new TimelineMax();
tl2.add(
    TweenMax.fromTo('#img2', 1, {scale: 1.2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)
// tween
new ScrollMagic.Scene({
  triggerElement: '#p2',
  triggerHook: 0.8,
  // duration: 200
})
.setTween(tl2)
.addIndicators({name: "come2" }) 
.addTo(controller);

const height3 = document.getElementById('img3').getBoundingClientRect().height;
const width3 = document.getElementById('img3').getBoundingClientRect().width;
const fadeout3 = 0.95 * height3;
const pin3 = 1.05 * height3;
const left3 = document.documentElement.clientWidth * 0.1 + width3;

var tl3 = new TimelineMax();
tl3.add(
    TweenMax.fromTo('#img3', 1, {scale: 1.2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)

new ScrollMagic.Scene({
  triggerElement: '#p3',
  triggerHook: 0.8,
  // duration: 200
})
.setTween(tl3)
.addIndicators({name: "come3" }) 
.addTo(controller);


const height4 = document.getElementById('img4').getBoundingClientRect().height;
const width4 = document.getElementById('img4').getBoundingClientRect().width;
const fadeout4 = 0.95 * height4;
const pin4 = 1.05 * height4;
const right4 = document.documentElement.clientWidth + width4;

var tl4 = new TimelineMax();
tl4.add(
    TweenMax.fromTo('#img4', 1, {scale: 1.2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)

// tween
new ScrollMagic.Scene({
  triggerElement: '#p4',
  triggerHook: 0.8,
  // duration: 200
})
.setTween(tl4)
.addIndicators({name: "come4" }) 
.addTo(controller);
