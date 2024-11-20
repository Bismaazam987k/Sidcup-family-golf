var crs = document.querySelector(".cursor")
var blu = document.querySelector(".cursor2")
document.addEventListener("mousemove",function(dets){
  crs.style.left = dets.x +"px"
  crs.style.top = dets.y +"px"
  blu.style.left = dets.x -250+"px"
  blu.style.top = dets.y -250 +"px"
})

gsap.to(".nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end :"top -11% ",
        scrub:1
    }
   
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2
}})

var tl = gsap.timeline()

tl.from("h4",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.3,

})
tl.from("h5",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})
tl.from("h1",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})
tl.from("h2",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})
tl.from("p",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})

