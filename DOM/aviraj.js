gsap.from(".child h1",{
    y:20,
    opacity:0,
    delay:1,
    duration:2,
    stagger:0.5
})

gsap.from("parent ul",{
    y:20,
    opacity:0,
    delay:1,
    duration:2,
    stagger:0.5
})
document.addEventListener("mousemove",function(kqb){
    gsap.to(".rough",{
        left:kqb.x,
        top:kqb.y,
    })
})