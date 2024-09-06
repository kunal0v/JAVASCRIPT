var tl=gsap.timeline()
gsap.from(".parent h3",{
    y:-50,
    opacity:0,
    delay:0.2,
    duration:1,
    stagger:0.1
})
tl.from(".child h1",{
    x:500,
    opacity:0,
    delay:0.5,
    stagger:0.3
})

