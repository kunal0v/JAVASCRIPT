// gsap.to("#box",{
//     x:1000,
//     y:1000,
//     duration:3,
//     delay:1,
//     rotate:360,
//     backgroundColor:"orange",
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true,
// })

// gsap.to("#box2",{
//     y:1000,
//     x:1000,
//     duration:3,
//     delay:2,
//     rotate:360,
//     backgroundColor:"white",
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true,
// })
// gsap.to("#box3",{
//     y:1000,
//     x:1000,
//     duration:3,
//     delay:3,
//     rotate:360,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true,
// })

// gsap.from("h1",{
//     color:"red",
//     duration:2,
//     delay:1,
//     y:1000,
//     stagger:-1,
// })

var tl=gsap.timeline()
tl.to("#box",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1,
})
tl.to("#box2",{
    x:1000,
    duration:1.5,
})
tl.to("#box3",{
    x:800,
    duration:1.5,
    rotate:360,
})

var tl2=gsap.timeline()
tl2.from("h1",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
})
tl2.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3,
})
tl2.from("h3",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3,
})